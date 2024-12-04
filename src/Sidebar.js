import React from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <>
      <div id="templatemo_right_column">
        <ul className="templatemo_menu">
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="service">Services</Link>
          </li>
          <li>
            <Link to="portfolio">Portfolio</Link>
          </li>
        </ul>

        <div className="section_box" align="justify">
          <div className="subtitle">Quick Contact</div>
          Tel: 002-040-0240
          <br />
          Fax: 001-050-0480
          <br />
          Email: info[at]templatemo.com
          <br />
          <br />
        </div>
        <div className="section_box" align="justify">
          <div className="subtitle">About this website</div>
          Curabitur velit tellus, placerat et, dapibus varius, aliquet quis,
          purus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          <br />
          <a href="http://validator.w3.org/check?uri=referer">
            <img
              src="http://www.w3.org/Icons/valid-xhtml10"
              alt="Valid XHTML 1.0 Transitional"
              width="88"
              height="31"
              vspace="8"
              border="0"
            />
          </a>
        </div>

        <div className="section_box">
          <div className="subtitle">Special Thanks</div>
          <a href="#">Website Link One</a>
          <br />
          <a href="#">Blog Link Two</a>
          <br />
          <a href="#">Template Link Three</a>
          <br />
          <a href="#">Text Link Four</a>
          <br />
          <a href="http://www.templatemo.com" target="_parent">
            Free Templates
          </a>
          <br />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
