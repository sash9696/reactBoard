import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import TechStack from "./components/TechStack/TechStack";
import Experience from "./components/Experience/Experience";

//PORTFOLIO WEBSITE

//1.Navbar
//2.HomePage
//3.Tech Stack
//4. Experience
//5.Projects

function App() {
  return (
    <>
      <Navbar />
      <div className="app">
        <Homepage />
        <TechStack />
        <Experience />
      </div>
    </>
  );
}

export default App;
