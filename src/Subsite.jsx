import React from 'react';
import { useParams } from 'react-router-dom';

const SubSite = () => {
  const { subsiteId } = useParams(); // Get the subsiteId from the URL

  return (
    <div>
      <h1>Welcome to {subsiteId} Subsite!</h1>
      {/* You can display other content related to this subsite */}
      <p>Details about {subsiteId}...</p>
    </div>
  );
};

export default SubSite;
