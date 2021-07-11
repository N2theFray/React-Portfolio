import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center text-center align-center">
        
        
        <h1>Steven Black</h1>
       

        <nav className="text-center">
          <Link className="mx-2 text-dark" to="/">About Me</Link>
          <Link className="mx-2 text-dark" to="/contact">Contact</Link>
          <Link className="mx-2 text-dark" to='/portfolio'>Portfolio</Link>
          <Link className="mx-2 text-dark" to='/resume'>Resume</Link>
          
        </nav>
      </div>
    </header>
  );
};

export default Header;
