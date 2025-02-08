import React, { useState, useEffect } from 'react';
import Header from '../src/Header'
import './global.css';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js';
import sideBar from '../src/sideBar';



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
        progress={((checkedBubbles/bubbles)*100)} 
      />
    </div>
    </div>
  );
};

export default App;
