import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthForm from './AuthForm';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true); // For showing/hiding the navbar
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // For tracking mobile view
  const [authFormType, setAuthFormType] = useState(null); // To track the type of form (SignIn/SignUp)

  // Handle window resize to track mobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle the navbar visibility
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Open SignIn/SignUp form
  const openAuthForm = (type) => {
    setAuthFormType(type);
  };

  // Close SignIn/SignUp form
  const closeAuthForm = () => {
    setAuthFormType(null);
  };

  return (
    <>
      {isMobile && (
        <button className="toggle-navbar-btn" onClick={toggleNavbar}>
          {isOpen ? 'Hide Menu' : 'Show Menu'}
        </button>
      )}

      <nav className={`navbar ${isOpen ? 'open' : 'half-closed'}`}>
        <div className="navbar-left">
          {"FOODWALA!"}
        </div>
        <div className="navbar-center">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/recipes">Recipes</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="signin-btn" onClick={() => openAuthForm('signin')}>Sign In</button>
          <button className="signup-btn" onClick={() => openAuthForm('signup')}>Sign Up</button>
        </div>
      </nav>

      {/* Render the AuthForm if form type is selected */}
      {authFormType && <AuthForm type={authFormType} onClose={closeAuthForm} />}
    </>
  );
};

export default Navbar;
