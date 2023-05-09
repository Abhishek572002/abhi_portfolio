import React, { useState } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import Bar from "@iconscout/react-unicons/icons/uil-bars";
import Minus from "@iconscout/react-unicons/icons/uil-minus";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <Link spy={true} to="Navbar" smooth={true} activeClass="activeClass">
          <div className="n-name">Abhishek</div>
        </Link>
        <Toggle />
      </div>
      <div className="n-right">
        <Link spy={true} to="Contact" smooth={true}>
          {/* <button className="button n-button">Contact</button> */}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
