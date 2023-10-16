import './Navbar.css';
import React from 'react';
import logo from '../../assets/logo.svg'; // Import the logo image

function Navbar() {

   // Array of navigation items
   const navItems = [
    { text: 'Services', link: "#section1" },
    { text: 'Industries', link: "#section3" },
    { text: 'Cases', link: "#section2" },
    { text: 'Contact', link: "#section4" },
  ];

  return (
    <div className="header-container">
      <header className="header-content-container">
      <div className="App">
      <img src={logo} alt="My Logo" className='header-logo'/>
      
    </div>
      <nav>
        <ul className='header-list'>
          {navItems.map((item, index) => (
            <li key={index} className='header-list-item'>
              <a className='header-list-item-text' href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul>
      </nav>
      <button className='header-button'>Let’s Talk</button>
    </header>
    </div>
  );
}


export default Navbar;