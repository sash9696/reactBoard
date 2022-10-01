import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  const scroll = (id) => {
    document.getElementById(id).scrollIntoView();
  };

  var name = "<SC />";
  return (
    <div className={`navbar_container ${show && "navbar_light"}`}>
      <div className="navbar_left">{name}</div>
      <div className="navbar_right">
        <p onClick={() => scroll("homepage")}>About</p>
        <p onClick={() => scroll("techstack")}>Tools</p>
        <p onClick={() => scroll("experience")}>Experience</p>
        <p>Projects</p>
        <p>Resume</p>
      </div>
    </div>
  );
}
