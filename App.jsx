import React, { useState, useEffect } from 'react';
import './global.css';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js';

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    
  }, []);
  
  return (
    <div className="full-dashboard">
      <Header/>
    </div>
  );
};

export default App;
