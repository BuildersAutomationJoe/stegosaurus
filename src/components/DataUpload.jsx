import React, { useState } from 'react';

function DataUpload() {
  const [file, setFile] = useState(null);
  const [textInput, setTextInput] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && (selectedFile.type === 'text/csv' || selectedFile.type === 'application/vnd.ms-excel')) {
      setFile(selectedFile);
      setError('');
    } else {
      setError('Unsupported file format. Please upload a CSV or Excel file.');
    }
  };

  const handleTextChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file && !textInput) {
      setError('Please provide a file or input raw text.');
      return;
    }

    const formData = new FormData();
    if (file) formData.append('file', file);
    if (textInput) formData.append('text', textInput);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload data');
      }

      alert('Data uploaded successfully!');
    } catch (err) {
      console.error(err);
      setError('Error uploading data.');
    }
  };

  return (
    <div>
      <h1>Data Upload</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Upload File:</label>
          <input type="file" onChange={handleFileChange} />
        </div>
        <div>
          <label>Or Enter Raw Text:</label>
          <textarea value={textInput} onChange={handleTextChange} rows="5" />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default DataUpload;
