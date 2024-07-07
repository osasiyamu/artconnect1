import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import './PageStyles.css';

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg">
      <div className="container-fluid">
        <button className="navbar-toggler border" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/discover">Discover</Link> {/* Ensure path casing matches your routes */}
            </li>
          </ul>
          <Link className="navbar-brand mx-auto websiteName" to="/">ArtConnect</Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/community">Community</Link> {/* Ensure path casing matches your routes */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">Shop</Link> {/* Ensure path casing matches your routes */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile"><i className="bi bi-person-fill"></i></Link> {/* Ensure path casing matches your routes */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
