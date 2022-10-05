import { useToggle } from "../../hooks/useToggle";
import { RiMenu2Fill, RiSearchLine } from "react-icons/ri";
import "../../assets/styles/css/navBar.css";
import SearchBar from "./searchBar";
import React from "react";

const Navbar = ({ toggle, sideBarIsOpen }) => {
  const { Toggle, IsOpen } = useToggle({ component: "searchBar" });

  let opacityClasses = ["navBar"];

  !sideBarIsOpen
    ? opacityClasses.push("opacity_on_navBar")
    : opacityClasses.push("opacity_off_navBar");

  return (
    <>
      <nav
        className={opacityClasses.join(" ")}
        isopen={(!sideBarIsOpen).toString()}>
        <div className="containerDataNavBar">
          <div className="iconsNavBar">
            <RiMenu2Fill onClick={toggle} className="icon_Menu"/>
            <RiSearchLine onClick={Toggle} />
          </div>
          <SearchBar isopen={IsOpen} toggle={Toggle} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
