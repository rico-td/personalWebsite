import React from "react";

import "./HamburgerMenu.css";

// react icons
// import { RxHamburgerMenu } from "react-icons/rx";
// import { HiMenu } from "react-icons/hi";
import { RiMenu5Fill } from "react-icons/ri";

const HamburgerMenu = () => {
  return (
    <div className="hamburger-wrap">
      <div className="nav-menu-burger">
        <RiMenu5Fill size={25} color="black" />
        <button className="hamburger-btn"></button>
      </div>
    </div>
  );
};

export default HamburgerMenu;
