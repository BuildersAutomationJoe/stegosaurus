import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DocumentUpload from './DocumentUpload';
import './index.css';

function App() {
  const [documents, setDocuments] = useState([]); // State to store the list of documents
  const [chatMessage, setChatMessage] = useState(''); // State for chatbot input
  const [chatLog, setChatLog] = useState([]); // State to track chatbot conversations

  // Fetch documents from the backend (processed or in the queue)
  useEffect(() => {
    async function fetchDocuments() {
      try {
        const response = await axios.get('http://localhost:5000/api/documents');
        setDocuments(response.data);
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    }

    fetchDocuments();
  }, []);

  // Handle chatbot input change
  const handleChatInputChange = (event) => {
    setChatMessage(event.target.value);
  };

  // Handle sending a message to the chatbot
  const handleChatSend = async () => {
    if (chatMessage.trim() === '') return;

    setChatLog([...chatLog, { type: 'user', text: chatMessage }]);

    try {
      const response = await axios.post('http://localhost:5000/api/chat', {
        message: chatMessage
      });

      const botResponse = response.data.response;
      setChatLog([...chatLog, { type: 'user', text: chatMessage }, { type: 'bot', text: botResponse }]);
      setChatMessage('');
    } catch (error) {
      console.error('Error fetching chatbot response:', error);
      setChatLog([...chatLog, { type: 'bot', text: 'Sorry, something went wrong.' }]);
    }
  };

  return (
    <div className="App">
      <h1>Builder's Accounting</h1>
      
      {/* Document Upload */}
      <DocumentUpload />

      <hr />

      {/* Documents Section */}
      <div className="document-list">
        <h2>Documents (Processed & In Queue)</h2>
        <ul>
          {documents.map((doc) => (
            <li key={doc.id}>
              {doc.name} - {doc.status}
            </li>
          ))}
        </ul>
      </div>

      <hr />

      {/* Chatbot Section */}
      <div className="chatbot">
        <h2>Ask Questions About Your Documents</h2>
        <div className="chat-box">
          {chatLog.map((entry, index) => (
            <div key={index} className={entry.type === 'user' ? 'user-message' : 'bot-message'}>
              <strong>{entry.type === 'user' ? 'You: ' : 'Bot: '}</strong>{entry.text}
            </div>
          ))}
        </div>
        <input
          type="text"
          value={chatMessage}
          onChange={handleChatInputChange}
          placeholder="Ask a question..."
        />
        <button onClick={handleChatSend}>Send</button>
      </div>
    </div>
  );
}

export default App;
