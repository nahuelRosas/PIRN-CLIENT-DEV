import { useLocation } from "react-router-dom";
import Base from "./views/components/base";
import Card from "./views/components/card";
import useLoad from "./hooks/useLoad";
import Router from "./routes/router";
import React from "react";

const App = () => {
  useLoad();
  const location = useLocation();
  return (
    <>
      <Card>
        {location.pathname !== "/" ? <Base /> : null}
        <Router />
      </Card>
    </>
  );
};
export default App;
