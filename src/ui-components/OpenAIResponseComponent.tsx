import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Props {
  response: string;
}

const OpenAIResponseComponent: React.FC<Props> = ({ response }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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
