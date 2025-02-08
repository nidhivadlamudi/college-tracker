import React, { useState, useEffect } from 'react';
import Header from './Header'
import './global.css';
import CollegeCard from './dashboardIcon';
import SideBar from './sideBar';
import CollegeCardList from './CollegeCardList';
import './CollegeCard.css'
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Carnegie Mellon University",
      logo: "/img/carnegie-mellon.jpg",
      progress: 70,
    },
    {
      id: 2,
      name: "Harvard University",
      logo: "/img/harvard.jpg",
      progress: 85,
    },
    {
      id: 3,
      name: "MIT",
      logo: "/img/mit.jpg",
      progress: 60,
    },
  ]);
  const handleDelete = (id) => {
    setData((prevData) => prevData.filter(college => college.id !== id));
  };
  
  return (
    <div>
    <div className="full-dashboard">
      <Header/>
    </div>
    <div className="p-4">
      <CollegeCard 
        logo="college-logo.png" 
        name="Sample College" 
        progress={10} 
      />
    </div>
    <div>
      <SideBar />
    </div>
    </div>
  );
};

export default App;
