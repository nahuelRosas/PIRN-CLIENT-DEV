import { dataFilterOrderBar } from "../../constants/data-filterOrderBar";
import useRecuperator from "../../hooks/useRecuperator";
import { useLoadRestartWP } from "../../hooks/useLoad";
import { useToggle } from "../../hooks/useToggle";
import "../../assets/styles/css/bubbleCard.css";
import useFilter from "../../hooks/useFilter";
import { RiCloseFill } from "react-icons/ri";
import BubbleItems from "./bubbleItems";
import React from "react";

const StatusOrderFilter = () => {
  const { Element: filteredGamesStatus } = useRecuperator({
    component: "filteredGamesStatus",
    WOtestArray: true,
  });
  const { Element: orderedGamesStatus } = useRecuperator({
    component: "orderedGamesStatus",
    WOtestArray: true,
  });

  return { filteredGamesStatus, orderedGamesStatus };
};

const _Restart = (_className) => {
  const payload = _className === "bubble_Order" ? "OGR" : "FGR";
  const { Restart } = useLoadRestartWP({
    component: payload,
  });
  return { Restart };
};

const _Toggle = (component) => {
  const { Toggle, IsOpen } = useToggle({ component: component });
  return { Toggle, IsOpen };
};

const Mapping_Filter = ({ data, _Parent, _toggle }) => {
  const { Activate } = useFilter({
    type: "DB",
  });

  return data.map((item, index) => {
    const { Toggle, IsOpen } =
      item.method !== false
        ? _Toggle(item.key)
        : {
            Toggle: () => {
              Activate();
              _toggle();
            },
            IsOpen: false,
          };
    return (
      <div
        key={index}
        className={`bubbleCard_${item.title.split(" ").join("")}`}
        onClick={() => {
          Toggle();
        }}>
        {item.title}
        {item.method !== false ? (
          <BubbleItems
            _className={item.title}
            toggle={Toggle}
            isOpen={IsOpen}
            method={item.method}
            _Parent={_Parent}
            _toggle={_toggle}
          />
        ) : null}
      </div>
    );
  });
};

const Mapping_Order = ({ data, _Parent, _toggle }) => {
  return data.map((item, index) => {
    const { Toggle, IsOpen } = _Toggle(item.method);
    return (
      <div
        key={index}
        className={`bubbleCard_${item.title.split(" ").join("")}`}
        onClick={() => {
          Toggle();
        }}>
        {item.title}
        <BubbleItems
          _className={item.title}
          toggle={Toggle}
          isOpen={IsOpen}
          method={item.method}
          _Parent={_Parent}
          _Keys={item.keys}
          _toggle={_toggle}
        />
      </div>
    );
  });
};

const BubbleCard = ({ isOpen, toggle, _className }) => {
  const { bubbleItems } = dataFilterOrderBar[_className];
  const { filteredGamesStatus, orderedGamesStatus } = StatusOrderFilter();
  const { Restart } = _Restart(_className);
  const _Mapping =
    _className === "bubble_Filter"
      ? Mapping_Filter({
          data: bubbleItems,
          _Parent: _className,
          _toggle: toggle,
        })
      : Mapping_Order({
          data: bubbleItems,
          _Parent: _className,
          _toggle: toggle,
        });

  let opacityClasses = ["bubbleCard_container", _className];

  isOpen
    ? opacityClasses.push("opacity_on_bubbleCard")
    : opacityClasses.push("opacity_off_bubbleCard");

  const _StatusFilter =
    filteredGamesStatus && _className === "bubble_Filter" ? true : false;
  const _StatusOrder =
    orderedGamesStatus && _className === "bubble_Order" ? true : false;

  return (
    <>
      <div className={opacityClasses.join(" ")} isopen={isOpen.toString()}>
        <div className="icon_bubbleCard">
          <RiCloseFill className="close_icon_bubbleCard" onClick={toggle} />
        </div>
        <div
          className="bubbleCard_status_button"
          onClick={() => {
            Restart();
            toggle();
          }}>
          {_StatusFilter && (
            <>
              <span>RESET FILTERS</span>
            </>
          )}
          {_StatusOrder && (
            <>
              <span>RESET ORDER</span>
            </>
          )}
        </div>
        <div className="bubbleCard_menu">
          {_Mapping.map((item) => {
            return item;
          })}
        </div>
      </div>
    </>
  );
};
export default BubbleCard;
