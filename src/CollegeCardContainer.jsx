import React from 'react';
import { Link } from 'react-router-dom'; // Import Link to enable navigation
import CollegeCard from './CollegeCard';
import './CollegeCard.css';
import './CollegeCardContainer.css';

const CollegeCardContainer = ({ colleges, onDelete }) => {
  return (
    <div className="cards-container">
      {colleges.map((college) => (
        <Link 
          key={college.id} 
          to={`/subsite/${college.subsite}`} // Link to the specific subsite
          className="card-link" // Optional: class to style the link (e.g., remove underline)
        >
          <CollegeCard
            id={college.id}
            logo={college.logo}
            name={college.name}
            progress={college.progress}
            onDelete={onDelete}
            subsite={college.subsite}
          />
        </Link>
      ))}
    </div>
  );
};

export default CollegeCardContainer;
