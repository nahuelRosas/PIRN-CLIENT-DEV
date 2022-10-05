import { RiArrowUpDownFill, RiSoundModuleFill } from "react-icons/ri";
import React from "react";
import "../../assets/styles/css/filterOrderBar.css";

const FilterOrderBar = ({
  Toggle_Order,
  IsOpen_Order,
  Toggle_Filter,
  IsOpen_Filter,
}) => {
  let opacityClasses = ["FilterOrderBar"];
  let isOpen = !IsOpen_Order && !IsOpen_Filter ? true : false;
  isOpen
    ? opacityClasses.push("opacity_on_FilterOrderBar")
    : opacityClasses.push("opacity_off_FilterOrderBar");

  return (
    <>
      <nav className={opacityClasses.join(" ")} isopen={isOpen.toString()}>
        <div className="icons_FilterOrderBar" onClick={Toggle_Order}>
          <RiArrowUpDownFill />
          <span className="text_icons_FilterOrderBar">Order</span>
        </div>
        <div className="icons_FilterOrderBar" onClick={Toggle_Filter}>
          <RiSoundModuleFill />
          <span className="text_icons_FilterOrderBar">Filter</span>
        </div>
      </nav>
    </>
  );
};
export default FilterOrderBar;
