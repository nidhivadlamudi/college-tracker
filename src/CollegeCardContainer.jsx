import React from 'react';
import CollegeCard from './CollegeCard';
import './CollegeCard.css';
import './CollegeCardContainer.css';

const CollegeCardContainer = ({ colleges, onDelete }) => {
  return (
    <div className="cards-container">
      {colleges.map((college) => (
        <CollegeCard
          key={college.id}
          id={college.id}
          logo={college.logo}
          name={college.name}
          progress={college.progress}
          onDelete={onDelete}
          subsite={college.subsite}
        />
      ))}
    </div>
  );
};

export default CollegeCardContainer;
