import React from 'react';

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-container">
        <span className="title">COLLEGE APPLICATION TRACKER</span>
      </div>
      <div className="profile-container">
        <img 
          src="/img/default.jpeg" 
          alt="Profile" 
          className="profile-pic" 
        />
      </div>

      <nav className="nav-buttons">
      </nav>
    </header>
  );
};

export default Header;
