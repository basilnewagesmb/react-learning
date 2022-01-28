import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "components/NavBar";
import Router from "router";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      {pathname.includes("/dashboard") ? null : <NavBar />}
      <Router />
    </div>
  );
}

export default App;
