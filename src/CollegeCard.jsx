import React, { useState } from 'react';
import './CollegeCard.css'; // Ensure you have this CSS file for styling

const CollegeCard = ({ id, logo, name, progress, onDelete }) => {
  const [showDelete, setShowDelete] = useState(false);

  const handleDeleteClick = () => {
    onDelete(id); // Call the delete handler passed from the parent component
  };

  return (
    <div className="college-card">
      <div className="college-header">
        <img src={logo} alt="College Logo" className="college-logo" />
        <div
          className="hamburger-menu"
          onClick={() => setShowDelete(!showDelete)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        {showDelete && (
          <div className="delete-option" onClick={handleDeleteClick}>
            Delete
          </div>
        )}
      </div>
      <div className="college-name">{name}</div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default CollegeCard;
