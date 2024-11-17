import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Props {
  response: string;
  error?: string | null;
  loading?: boolean;
}

const OpenAIResponseComponent: React.FC<Props> = ({ response, error, loading }) => {
  if (loading) return (
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
        <div>Loading...</div>
      </div>
    </div>
  );

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
        {error ? (
          <div style={{
            minHeight: '20px',
            color: '#ff0000',
            fontSize: '16px',
            lineHeight: '1.5'
          }}>
            {error}
          </div>
        ) : (
          <div style={{
            minHeight: '20px',
            color: '#000',
            fontSize: '16px',
            lineHeight: '1.5'
          }}>
            {response}
          </div>
        )}
      </div>
    </div>
  );
};

export default OpenAIResponseComponent;
