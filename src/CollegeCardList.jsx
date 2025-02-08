import React, { useState } from 'react';
import CollegeCard from './CollegeCard';

const CollegeCardList = () => {
  const [colleges, setColleges] = useState([
    {
      id: 1,
      name: "Harvard University",
      logo: "https://via.placeholder.com/40",
      progress: 75,
    },
    {
      id: 2,
      name: "MIT",
      logo: "https://via.placeholder.com/40",
      progress: 50,
    },
    {
      id: 3,
      name: "Stanford University",
      logo: "https://via.placeholder.com/40",
      progress: 90,
    },
  ]);

  // Handler for deleting a college card
  const handleDelete = (id) => {
    setColleges((prevColleges) => prevColleges.filter(college => college.id !== id));
  };

  return (
    <div>
      {colleges.map(college => (
        <CollegeCard
          key={college.id}
          id={college.id}
          logo={college.logo}
          name={college.name}
          progress={college.progress}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default CollegeCardList;
