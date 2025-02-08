import React, { useState, useEffect } from 'react';
import Header from './Header'
import './global.css';
import CollegeCardList from './CollegeCardList';
import './CollegeCard.css'
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js';


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

  useEffect(() => {
    // This effect can be used to fetch college data if needed in the future
  }, []);

  return (
    <div>
      <div className="full-dashboard">
        <Header />
      </div>
      <div className="p-4">
        {/* Pass the colleges data to the CollegeCardList component */}
        <CollegeCardList colleges={data} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default App;