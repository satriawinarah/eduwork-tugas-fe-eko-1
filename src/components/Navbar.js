import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Home
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
