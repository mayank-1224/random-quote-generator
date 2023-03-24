import React from "react";
import "./App.css";
import Bookmarks from "./components/Bookmarks";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import Random from "./components/Random";

function App() {
  let location = useLocation();
  return (
    <>
      <div className="appContainer">
        <div className="navbar">
          <Link className="links" to="/">
            <h1
              style={{
                fontWeight: location.pathname === "/" ? "700" : "300",
              }}
            >
              Home
            </h1>
          </Link>
          <Link className="links" to="/bookmarks">
            <h2
              style={{
                fontWeight: location.pathname === "/bookmarks" ? "700" : "300",
              }}
            >
              Bookmarks
            </h2>
          </Link>
        </div>
        <Routes>
          <Route exact path="/" element={<Random />} />
          <Route exact path="/bookmarks" element={<Bookmarks />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
