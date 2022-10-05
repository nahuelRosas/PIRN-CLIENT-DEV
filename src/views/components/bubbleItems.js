import useRecuperator from "../../hooks/useRecuperator";
import { RiArrowLeftSFill } from "react-icons/ri";
import "../../assets/styles/css/bubbleItems.css";
import AuxComplement from "./auxComplement";
import React from "react";

const Mapping_Filter = ({ data, type, _Parent, method, _toggle }) => {
  const _Mapping = data.map((item) => {
    return { type: type, category: item.name };
  });

  return _Mapping.map((item, index) => {
    return (
      <AuxComplement
        key={index}
        type={item.type}
        category={item.category}
        _Parent={_Parent}
        _Method={method}
        _toggle={_toggle}
      />
    );
  });
};

const Mapping_Order = ({ data, type, _Parent, method, _toggle }) => {
  const _Mapping = data.map((item) => {
    return { type: type, category: item };
  });
  return _Mapping.map((item, index) => {
    return (
      <AuxComplement
        key={index}
        type={item.type}
        category={item.category}
        _Parent={_Parent}
        _Method={method}
        _toggle={_toggle}
      />
    );
  });
};

const BubbleItems = ({
  isOpen,
  toggle,
  _className,
  method,
  _Parent,
  _Keys = false,
  _toggle,
}) => {
  const { Element } = useRecuperator({ component: method });

  const _Mapping =
    _Parent === "bubble_Filter"
      ? Mapping_Filter({
          data: Element,
          type: _className.toLowerCase(),
          _Parent: _Parent,
          method: method,
          _toggle: _toggle,
        })
      : Mapping_Order({
          data: _Keys,
          type: _className.toLowerCase().split(" ").join(""),
          _Parent: _Parent,
          method: method,
          _toggle: _toggle,
        });

  let opacityClasses = ["bubbleItems_container", _className];
  let icon_opacity = ["icon_bubbleItems"];

  isOpen
    ? opacityClasses.push("opacity_on_bubbleItems") &&
      icon_opacity.push("opacity_on_icon_bubbleItems")
    : opacityClasses.push("opacity_off_bubbleItems") &&
      icon_opacity.push("opacity_off_icon_bubbleItems");

  return (
    <>
      <div className={opacityClasses.join(" ")} isopen={isOpen.toString()}>
        <div className="icon_bubbleCard">
          <RiArrowLeftSFill
            className="close_icon_bubbleCard"
            onClick={toggle}
          />
        </div>
        <div className={`bubbleItems_menu_${_className} bubbleItems_menu`}>
          {_Mapping.map((item) => {
            return item;
          })}
        </div>
      </div>
    </>
  );
};
export default BubbleItems;
