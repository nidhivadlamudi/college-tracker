import React from 'react';

const CollegeCard = ({ logo, name, city, state, progress }) => {
  return (
    <div className="college-card bg-white p-4 rounded-lg shadow-md w-64 mb-4">
      <img src={logo} alt={`${name} logo`} className="college-logo w-16 h-16 rounded-full mx-auto" />
      <h3 className="text-lg font-bold text-center mt-2">{name}</h3>
      <p className="text-center">{city}, {state}</p>
      <div className="progress-bar mt-4">
        <div className="progress-bar-background bg-gray-200 h-2 rounded-full">
          <div className="progress-bar-fill bg-blue-500 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="text-center mt-1">{progress}% completed</p>
      </div>
    </div>
  );
};

export default CollegeCard;
