import React, { useState, useEffect } from 'react';
import Header from './Header'
import './global.css';
import CollegeCardContainer from './CollegeCardContainer';
import VerticalTaskBar from './sideBar';
import useStore from './store';


const App = () => {

  const [colleges, setColleges] = useState([
    { id: 1, logo: 'logo1.png', name: 'College A', progress: 70 },
    { id: 2, logo: 'logo2.png', name: 'College B', progress: 85 },
    { id: 3, logo: 'logo3.png', name: 'College C', progress: 40 },
  ]);

  const [data, setData] = useState([

  ]);
  const handleDelete = (id) => {
    setColleges(colleges.filter((college) => college.id !== id));
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
        <CollegeCardContainer colleges={colleges} onDelete={handleDelete} />
      </div>
      <div>
        <VerticalTaskBar />
      </div>
    </div>
  );
};

export default App;