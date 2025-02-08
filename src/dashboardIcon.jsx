import React from 'react';
import './dashboardIcon.css';

const CollegeCard = ({ logo, name, progress }) => {
  return (
    <div className="college-card">
      <div className="college-header">
        <img src={logo} alt="College Logo" className="college-logo" />
        <h2 className="college-name">{name}</h2>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default CollegeCard;