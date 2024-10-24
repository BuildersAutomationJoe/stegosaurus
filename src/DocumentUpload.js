import React, { useState } from 'react';
import axios from 'axios';

function DocumentUpload() {
  const [selectedFile, setSelectedFile] = useState(null); // State to store the selected file
  const [uploadStatus, setUploadStatus] = useState(''); // State to track upload status

  // Handle file selection
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setUploadStatus(''); // Reset upload status when a new file is selected
  };

  // Handle file upload
  const handleFileUpload = async () => {
    if (!selectedFile) {
      setUploadStatus('Please select a file before uploading.');
      return;
    }

    // Create a FormData object to send the file data
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      // Replace 'http://localhost:5000/api/upload' with your actual backend endpoint
      const response = await axios.post('http://localhost:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Display success message with the file URL from S3
      setUploadStatus(`File uploaded successfully! File URL: ${response.data.fileUrl}`);
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadStatus('Error uploading file. Please try again.');
    }
  };

  return (
    <div className="document-upload">
      <h2>Upload a Document</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
}

export default DocumentUpload;
