import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckMoving, faCopyright  } from '@fortawesome/free-solid-svg-icons'; 
import './Footer.css';

const Footer = () => {
  return (
    <nav className="navbar fixed-bottom footer text-center">
      <div className="text-center">
        <FontAwesomeIcon icon={faTruckMoving} /> <br></br>
        <span>
        <FontAwesomeIcon icon={faCopyright} />2019 Mheels  
        </span>
      </div>
    </nav>
  )
};

export default Footer;