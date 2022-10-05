import { useToggle } from "../../hooks/useToggle";
import { useLocation } from "react-router-dom";
import FilterOrderBar from "./filterOrderBar";
import BubbleCard from "./bubbleCard";
import Sidebar from "./sideBar";
import Navbar from "./navBar";

const Base = () => {
  const { Toggle: Toggle_SideBar, IsOpen: IsOpen_SideBar } = useToggle({
    component: "sideBar",
  });
  const { Toggle: Toggle_Order, IsOpen: IsOpen_Order } = useToggle({
    component: "bubbleOrder",
  });
  const { Toggle: Toggle_Filter, IsOpen: IsOpen_Filter } = useToggle({
    component: "bubbleFilter",
  });

  const location = useLocation();
  const validationLocation =
    !location.pathname.includes("/videogame") &&
    !location.pathname.includes("/createGame") &&
    !location.pathname.includes("/about") &&
    !location.pathname.includes("/*")
      ? true
      : false;
  return (
    <>
      <Navbar
        toggle={
          IsOpen_Order === false && IsOpen_Filter === false
            ? Toggle_SideBar
            : () => {}
        }
        sideBarIsOpen={IsOpen_SideBar}
      />
      <Sidebar isOpen={IsOpen_SideBar} toggle={Toggle_SideBar} />
      {validationLocation && (
        <>
          <FilterOrderBar
            Toggle_Order={Toggle_Order}
            Toggle_Filter={Toggle_Filter}
            IsOpen_Order={IsOpen_Order}
            IsOpen_Filter={IsOpen_Filter}
          />

          <BubbleCard
            _className={"bubble_Order"}
            toggle={Toggle_Order}
            isOpen={IsOpen_Order}
          />

          <BubbleCard
            _className={"bubble_Filter"}
            toggle={Toggle_Filter}
            isOpen={IsOpen_Filter}
          />
        </>
      )}
    </>
  );
};
export default Base;
