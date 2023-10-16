import "./Footer.css";
import React from "react";

function Footer() {
  // Array of footer items
  const footerListItems = [
    { list: ["Terms of service", "Privacy policy", "Impressum"] },
    { list: ["Facebook", "Instagram", "Twitter"] },
    { list: ["Github", "Linkedin", "Teams"] },
    { list: ["Youtube", "Behance", "Dribbble"] },
  ];

  return (
    <div className="footer-container">
        <div className="center">
        <div className="title">
        <div className="dash"></div>
        <p className="footer-text">Contact us</p>
      </div>
      <div className="footer-content">
        <div className="footer-div1">
          <p className="footer-div1-title">
            Have a project in mind? Let's make it happen
          </p>
          <div className="footer-lists">
            {footerListItems.map((items,index) => (
              <ul key={index} className="footer-list">
                {items.list.map((item, index) => (
                  <li key={index} className="footer-list-item">
                    <p className="footer-text">{item}</p>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="footer-div2">
          <div style={{display: "block"}}>
            <p className="footer-text">22 Street Name, Suburb, 8000,</p>
            <p className="footer-text">Cape Town, South Africa</p>
            <p className="footer-text">+27 21 431 0001</p>
            <p className="footer-text">enquirie@website.co.za</p>
          </div>
          <div className=" footer-jobs">
            <p className="footer-text">Explore open jobs</p>
            <p className="footer-text">©2000—2023 Company Name</p>
          </div>
        </div>
      </div>
        </div>
      
    </div>
  );
}

export default Footer;
