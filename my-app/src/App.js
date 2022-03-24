
// import './App.css';
import React from "react";
// import "./about.css";
import Navbar from './component/navbar/Navbar';
// import Project from './component/project/Project';
// import Header from './component/contact/Contact';
// import Footer from './component/footer/Footer';
import AboutMe from './component/about/AboutMe';
// import Contact from './component/contact/Contact';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Navbar />

      <div className="content">
        <h1>
          <AboutMe />
          {/* <Project/>
          <Contact/>
          <Footer/> */}
        </h1>
      </div>
    </div>
  );
}

export default App;
