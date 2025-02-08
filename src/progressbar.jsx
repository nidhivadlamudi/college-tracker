import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div style={{ width: '100%', backgroundColor: '#e0e0df', height: '20px', borderRadius: '5px' }}>
      <div
        style={{
          width: `${progress}%`,
          backgroundColor: '#4caf50',
          height: '100%',
          borderRadius: '5px',
          transition: 'width 0.5s ease-in-out',
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
