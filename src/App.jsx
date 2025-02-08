import React, { useState, useEffect } from 'react';
import Header from './Header'
import './global.css';
import CollegeCardContainer from './CollegeCardContainer';
import VerticalTaskBar from './sideBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SubSite from './SubSite'; // The subsite component
// import useStore from './store';


const App = () => {

  const [colleges, setColleges] = useState([
    { id: 1, logo: 'logo1.png', name: 'College A', progress: 70, subsite: 'college-a' },
    { id: 2, logo: 'logo2.png', name: 'College B', progress: 85, subsite: 'college-b' },
    { id: 3, logo: 'logo3.png', name: 'College C', progress: 40, subsite: 'college-c'},
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
    <Router>
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
        {/* Define the Routes */}
        <Routes>
          <Route path="/" element={
            <div>
              <h1>Welcome to the College Tracker Dashboard</h1>
            </div>
          } />
          {/* Dynamic Route for each subsite */}
          {colleges.map(college => (
            <Route
              key={college.id}
              path={`/subsite/${college.subsite}`}
              element={<SubSite college={college} />}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
};

export default App;