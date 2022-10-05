import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SV, GGDBA, FGR, OGR } from "../../stores/actions";
import "../../assets/styles/css/searchBar.css";
import { RiCloseFill } from "react-icons/ri";
import React, { useState } from "react";

const SearchBar = ({ isopen, toggle }) => {
  let opacityClasses = ["searchBar_container"];
  if (isopen) {
    opacityClasses.push("opacity_on_searchBar");
  } else {
    opacityClasses.push("opacity_off_searchBar");
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const selector = useSelector((state) => state["filterInSearch"]);

  const [search, setSearch] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(SV({ payload: search }));
    dispatch(GGDBA());
    if (location.pathname !== "/home") {
      navigate("/home");
    }
  };

  const clearStatus = () => {
    setSearch("");
    dispatch(FGR());
    dispatch(OGR());
  };
  const onInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <>
      <div className={opacityClasses.join(" ")} isopen={isopen.toString()}>
        {selector === false && (
          <RiCloseFill className="close_icon_searchBar" onClick={toggle} />
        )}
        {selector === true && (
          <RiCloseFill
            className="close_icon_searchBar"
            onClick={() => {
              toggle();
              clearStatus();
            }}
          />
        )}
        <form onSubmit={onSubmit}>
          <input
            className="searchBar_input"
            type="search"
            name="search"
            placeholder="What are we searching for?"
            onChange={onInputChange}
            value={search}
          />
        </form>
      </div>
    </>
  );
};
export default SearchBar;
