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
    <div>
      <h2>OpenAI Response</h2>
      <p>{response}</p>
    </div>
  );
};

export default OpenAIResponseComponent;
