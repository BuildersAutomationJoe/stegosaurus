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
    <div style={{ 
      padding: '20px',
      maxWidth: '400px',
      margin: '0 auto'
    }}>
      <div style={{
        border: '1px solid #c4c4c4',
        borderRadius: '4px',
        padding: '16px',
        backgroundColor: 'white'
      }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#545454',
          fontSize: '14px'
        }}>AI Response</label>
        <div style={{
          minHeight: '20px',
          color: '#000',
          fontSize: '16px',
          lineHeight: '1.5'
        }}>
          {response}
        </div>
      </div>
    </div>
  );
};

export default OpenAIResponseComponent;
