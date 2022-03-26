// import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import "./navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CollectionsIcon from "@mui/icons-material/Collections";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { useState } from "react";

const Navbar = () => {
  // creating the function which can be assinged to element so it is fires when user clicks on it
  const [activeNav, setActive] = useState("/");
  return (
    <nav className="navbar">
      <h1>Darima's Portfolio</h1>
      <div className="links">
        <a
          href="/"
          className={activeNav === "/" ? "active" : ""}
          onClick={() => setActive("/")}
        >
          <HomeIcon />
        </a>
        <a
          href="/aboutme"
          className={activeNav === "/aboutme" ? "active" : ""}
          onClick={() => setActive("/aboutme")}
        >
          <InfoIcon />
        </a>

        <a
          href="/portfolio"
          className={activeNav === "/portfolio" ? "active" : ""}
          onClick={() => setActive("/portfolio")}
        >
          <CollectionsIcon />
        </a>
        <a
          href="/contact"
          className={activeNav === "/contact" ? "active" : ""}
          onClick={() => setActive("/contact")}
        >
          <PermContactCalendarIcon />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

// {
//   /* <BrowserRouter>
//       <Switch>
//         <Route component={home} path="/" exact />
//       </Switch>
//     </BrowserRouter> */
// }
