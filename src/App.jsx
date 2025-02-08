import React, { useState } from 'react';
import axios from 'axios';
import CollegeCard from './dashboardIcon'; // Import the CollegeCard component
import './global.css'; // Import global styles

const App = () => {
  const [query, setQuery] = useState('');
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // API Keys (Replace with your actual keys)
  const COLLEGE_API_KEY = 'RmeQBBBELlbB8eiN08c8xBHhdPhBjFe3AEClJyhS';
  const UNSPLASH_API_KEY = 'LesvslSHnNYwf9znh2o0DW61eaS1gjwcck0NxjscudE';

  // Function to fetch college data
  const fetchColleges = async (searchTerm) => {
    try {
      const response = await axios.get('https://api.data.gov/ed/collegescorecard/v1/schools.json', {
        params: {
          api_key: COLLEGE_API_KEY,
          'school.name': searchTerm, // Correct API parameter
          fields: 'id,school.name,school.city,school.state',
        },
      });

      console.log('API Response:', response.data); // Debugging

      return response.data.results || [];
    } catch (err) {
      console.error('Error fetching colleges:', err.response ? err.response.data : err.message);
      throw new Error('Failed to fetch colleges');
    }
  };

  // Function to fetch the college logo from Unsplash
  const fetchCollegeLogo = async (collegeName) => {
    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          query: collegeName + ' logo', // Ensuring better results
          client_id: 'LesvslSHnNYwf9znh2o0DW61eaS1gjwcck0NxjscudE', // Your Unsplash API key
          per_page: 1,
          orientation: 'squarish', // Ensure square-like images
        },
      });
  
      console.log('Unsplash API Response:', response.data); // Debugging
  
      if (response.data.results.length > 0) {
        return response.data.results[0].urls.small; // Return small image URL
      }
  
      return 'default-logo.png'; // Default logo if no image is found
    } catch (err) {
      console.error('Error fetching logo:', err);
      return 'default-logo.png'; // Default logo in case of error
    }
  };
  

  // Handle search input change
  const handleSearchChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (!value) {
      setColleges([]); // Clear results if search bar is empty
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const collegesData = await fetchColleges(value);

      if (collegesData.length === 0) {
        setColleges([]); // No results found
        setLoading(false);
        return;
      }

      // Fetch college logos in parallel
      const updatedColleges = await Promise.all(
        collegesData.map(async (college) => {
          const logo = await fetchCollegeLogo(college['school.name']);
          return { ...college, logo };
        })
      );

      setColleges(updatedColleges);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
  <div>
  <div className="search-bar">
  <input
    type="text"
    value={query}
    onChange={handleSearchChange}
    placeholder="🔍 Search for a college..."
    className="search-input"
  />
  </div>

      {loading && <div className="p-4">Loading...</div>}
      {error && <div className="p-4 error">{error}</div>}

      <div className="college-cards p-4">
        {colleges.length > 0 ? (
          colleges.map((college, index) => (
            <CollegeCard
              key={index}
              logo={college.logo} 
              name={college['school.name']}
              city={college['school.city']}
              state={college['school.state']}
            />
          ))
        ) : (
          <p>No colleges found.</p>
        )}
      </div>
    </div>
  );
};

export default App;
