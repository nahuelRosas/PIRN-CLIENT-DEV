import LandingPage from "../views/landingPage/landingPage";
import CreateGame from "../views/createGame/createGame";
import { Routes, Route } from "react-router-dom";
import Details from "../views/details/details";
import Home from "../views/home/home";
import React from "react";
import About from "../views/about/about";
import Error from "../views/components/error";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/createGame" element={<CreateGame />} />
      <Route path="/videoGame/:id" element={<Details />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};
export default Router;
