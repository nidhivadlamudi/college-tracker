import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [query, setQuery] = useState(''); // Stores the search query
  const [colleges, setColleges] = useState([]); // Stores the search results
  const [loading, setLoading] = useState(false); // To show loading spinner

  // Function to handle search when the user types in the search bar
  const handleSearch = async (event) => {
    const value = event.target.value;
    setQuery(value);  // Update the search query

    if (value.trim() === '') {
      setColleges([]);  // Clear the results if the input is empty
      return;
    }

    setLoading(true); // Start loading

    try {
      const response = await axios.get('https://api.data.gov/ed/collegescorecard/v1/schools', {
        params: {
          api_key: 'RmeQBBBELlbB8eiN08c8xBHhdPhBjFe3AEClJyhS', // Your College Scorecard API key
          school_name: value, // Query for school name based on user input
          fields: 'school.name', // Only retrieve the school name
        },
      });

      const collegesData = response.data.results || [];
      setColleges(collegesData); // Set the colleges state with the results
    } catch (error) {
      console.error('Error fetching colleges:', error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a college..."
        value={query}
        onChange={handleSearch}  // Trigger handleSearch function as user types
        style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
      />
      {loading && <div>Loading...</div>}

      <ul>
        {colleges.length > 0 ? (
          colleges.map((college, index) => (
            <li key={index}>{college.school.name}</li> // Display each matching college name
          ))
        ) : (
          <li>No colleges found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchBar;
