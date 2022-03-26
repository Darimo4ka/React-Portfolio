// import './App.css';
import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import "./about.css";
import Navbar from "./component/navbar/Navbar";
// import Project from './component/project/Project';
// import Header from './component/contact/Contact';
import Footer from "./component/footer/Footer";
import AboutMe from "./component/about/AboutMe";
import Contact from "./component/contact/Contact";
import Portfolio from "./component/portfolio/Portfolio";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/aboutme" element={<AboutMe/>}/>
          <Route exact path ="/portfolio" element={<Portfolio/>}/>
          <Route exact path ="/contact" element={<Contact />}/>
        </Routes >
        <Footer />
      </Router>
    </div>
  );
}

export default App;

// import { BrowserRouter, Route, Switch } from "react-router-dom";

// import About from "./components/About";

// function App() {
//   return (
//     <BrowserRouter>
//       <Switch>
//
//         <Route component={About} path="/about" />
//
//       </Switch>
//     </BrowserRouter>
//   );
// }
