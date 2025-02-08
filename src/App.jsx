import React, { useState, useEffect } from 'react';
import Header from './Header'
import './global.css';
import CollegeCard from './dashboardIcon';
import './dashboardIcon.css'
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js';

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    
  }, []);
  
  return (
    <div>
    <div className="full-dashboard">
      <Header/>
    </div>
    <div className="p-4">
      <CollegeCard 
        logo="college-logo.png" 
        name="Sample College" 
        progress={70} 
      />
    </div>
    </div>
  );
};

export default App;
