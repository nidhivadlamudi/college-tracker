import React, { useState } from 'react';
import './CollegeCard.css'; // Ensure you have this CSS file for styling

const CollegeCard = ({ id, logo, name, progress, color, onDelete }) => {
  const [showDelete, setShowDelete] = useState(false);

  const handleDeleteClick = () => {
    onDelete(id); // Call the delete handler passed from the parent component
  };
  
  const colors = [
    '#1D3557',  // Deep Blue
    '#457B9D',  // Slate Blue
    '#2A9D8F',  // Teal
    '#E76F51',  // Coral
    '#F4A261',  // Light Orange
    '#2D6A4F',  // Forest Green
    '#F1FAEE',  // Light Mint Green
    '#F4D35E',  // Golden Yellow
    '#FF6F61',  // Burnt Red
    '#6A4C93',  // Purple with depth
    '#FF914D',  // Soft Orange
    '#303030',  // Charcoal Grey
    '#BB3E03',  // Dark Red
    '#9A031E',  // Crimson Red
    '#8D3F33',  // Deep Brown
    '#034F84',  // Deep Navy Blue
    '#FFB703',  // Vivid Yellow-Orange
    '#D4E157',  // Lime Green
    '#9C27B0',  // Fuchsia
    '#00BFAE',  // Turquoise
    '#D32F2F',  // Scarlet Red
    '#8E44AD',  // Purple
    '#FF4081',  // Hot Pink
    '#FFEB3B',  // Bright Yellow
    '#00C853',  // Green
    '#9E9E9E',  // Medium Gray
    '#43A047',  // Green
    '#C2185B',  // Deep Pink
    '#0288D1',  // Bright Blue
  ];
  
  var usedColors = [

  ]
  

  // Utility function to generate a random color from the list
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    if (usedColors.includes(colors[randomIndex])){
      return getRandomColor()
    }
    usedColors.push(colors[randomIndex]);
    return colors[randomIndex];
  };

  const headerColor = getRandomColor();

  return (
    <div className="college-card">
      <div className="college-header" style = {{backgroundColor: headerColor}}>
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
