import navbarItems from "../../routes/navBar-items";
import "../../assets/styles/css/sideBar.css";
import { RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import React from "react";

const Sidebar = ({ isOpen, toggle }) => {
  let opacityClasses = ["sideBar_container"];
  if (isOpen) {
    opacityClasses.push("opacity_on_sideBar");
  } else {
    opacityClasses.push("opacity_off_sidebar");
  }

  return (
    <div className={opacityClasses.join(" ")} isopen={isOpen.toString()}>
      <div className="icon_sideBar">
        <RiCloseFill className="close-icon_sideBar" onClick={toggle} />
      </div>
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          {navbarItems.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="sidebar-links"
              onClick={toggle}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
