import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './mainNavigation.css';
import { UserAuth } from './context/AuthContext';

function MainNavigation() {

  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  const horiSelectorRef = useRef(null);
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const setActiveTab = () => {
      if (!activeLink || !horiSelectorRef.current) return;

      const activeLinkRect = activeLink.getBoundingClientRect();
      const horiSelectorRect = horiSelectorRef.current.getBoundingClientRect();
      const offsetLeft = activeLinkRect.left - horiSelectorRect.left;
      const offsetWidth = activeLinkRect.width;

      horiSelectorRef.current.style.transform = `translateX(${offsetLeft}px)`;
      horiSelectorRef.current.style.width = `${offsetWidth}px`;
    };

    setActiveTab();

    const links = document.querySelectorAll('.navbar-nav .nav-link');

    links.forEach((link) => {
      link.addEventListener('click', () => {
        setActiveLink(link);
        horiSelectorRef.current.classList.remove('active');
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', setActiveTab);
      });
    };
  }, [activeLink]);

  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/details" className="nav-link">
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/news" className="nav-link">
              JobNews
            </NavLink>
          </li>
          <li className="nav-item">
            {user?.displayName ? (
              <button onClick={handleSignOut} className='LogOutButton'>Logout</button>
            ) : (
              <NavLink to='/loginPage'>
                <button onClick={handleSignOut} className='LogOutButton'>
                LogIn
                </button>
                </NavLink>
            )}
          </li>
        </ul>
        <div ref={horiSelectorRef} className="hori-selector active"></div>
      </nav>
    </div>
  );
}

export default MainNavigation;
