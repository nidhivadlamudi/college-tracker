import React, { useState, useEffect } from 'react';
import './CollegeCard.css';

const CollegeCard = ({ id, logo, name, progress, onDelete }) => {
  const [showDelete, setShowDelete] = useState(false);
  const [headerColor, setHeaderColor] = useState('');

  const colors = [
    '#1D3557', '#457B9D', '#2A9D8F', '#E76F51', '#F4A261',
    '#2D6A4F', '#F1FAEE', '#F4D35E', '#FF6F61', '#6A4C93',
    '#FF914D', '#303030', '#BB3E03', '#9A031E', '#8D3F33',
    '#034F84', '#FFB703', '#D4E157', '#9C27B0', '#00BFAE',
    '#D32F2F', '#8E44AD', '#FF4081', '#FFEB3B', '#00C853',
    '#9E9E9E', '#43A047', '#C2185B', '#0288D1',
  ];

  useEffect(() => {
    setHeaderColor(colors[Math.floor(Math.random() * colors.length)]);
  }, []);

  const handleDeleteClick = () => {
    onDelete(id);
  };

  const handleHamburgerClick = () => {
    setShowDelete((prev) => !prev);
  };

  return (
    <div className="college-card">
      <div className="college-header" style={{ backgroundColor: headerColor }}>
        <img src={logo} alt="College Logo" className="college-logo" />
        <div className="hamburger-menu" onClick={handleHamburgerClick}>
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
      <div className="progress-percentage">{progress}% Done!</div>
    </div>
  );
};

export default CollegeCard;
