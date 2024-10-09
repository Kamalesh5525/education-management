// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light mb-4 py-4 " style={{background:'#091057'}}>
      <div className="container-fluid">
        <Link className="navbar-brand text-light " style={{fontSize:"22px"}} to="/">Education Management Systern</Link>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-light" style={{fontSize:"22px"}} to="/">Admin Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" style={{fontSize:"22px"}} to="/teacher">Teacher Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" style={{fontSize:"22px"}} to="/student">Student Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
