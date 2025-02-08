import React from 'react';

const SubSite = ({ college }) => {
  return (
    <div>
      <h1>{college.name}</h1>
      <img src={college.logo} alt={college.name} />
      <p>Progress: {college.progress}%</p>
      <p>This is a subpage dedicated to {college.name}.</p>
    </div>
  );
};

export default SubSite;
