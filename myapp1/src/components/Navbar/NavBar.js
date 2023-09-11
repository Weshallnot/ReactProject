import React from 'react';
import logo from './logo2.jpg';

const Navbar = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'grey', fontSize: '20px', fontWeight: 'bold' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Apla Doctor" height="50" width="100" className=" me-2" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/bmi">Calculate BMI</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About Us</a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            {isLoggedIn ? (
              <li className="nav-item">
                <button className="btn btn-link nav-link" onClick={onLogout}>Logout</button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link btn btn-primary me-2" href="/signin">Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link btn btn-secondary" href="/">Sign Up</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
