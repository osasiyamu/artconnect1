import React from 'react';
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
              <a className="nav-link" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Discover">Discover</a>
            </li>
          </ul>
          <a className="navbar-brand mx-auto websiteName" href="/">ArtConnect</a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/Community">Community</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Shop">Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Profile"><i class="bi bi-person-fill"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
