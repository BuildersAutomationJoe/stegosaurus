import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OpenAIResponseComponent: React.FC = () => {
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const result = await axios.get('/api/openai-response');
        setResponse(result.data);
      } catch (err) {
        setError('Failed to fetch response');
      } finally {
        setLoading(false);
      }
    };

    fetchResponse();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', maxWidth: '400px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>OpenAI Response</h2>
      <div style={{ backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '5px' }}>
        <strong>Response:</strong>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default OpenAIResponseComponent;
