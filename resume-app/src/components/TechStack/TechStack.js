import "./TechStack.css";
import c from "../../images/c.png";
import js from "../../images/js.png";
import css from "../../images/css.png";
import html from "../../images/html.png";
import TechStackIconContainer from "./TechStackIconContainer/TechStackIconContainer";

export default function TechStack() {
  const techstackData = [
    {
      id: 1,
      iconName: "C++",
      iconImage: c,
      iconAltProperty: "cImage",
    },
    {
      id: 2,
      iconName: "Javascript",
      iconImage: js,
      iconAltProperty: "jsImage",
    },
    { id: 3, iconName: "CSS", iconImage: css, iconAltProperty: "cssImage" },
    { id: 4, iconName: "HTML", iconImage: html, iconAltProperty: "htmlImage" },
  ];

  return (
    <div id="techstack" className="techstack_container">
      <p className="techstack_title">Tech Stack</p>
      <div className="techstack_icon_container">
        {techstackData.map((item, index) => {
          return (
            <TechStackIconContainer
              key={item.id}
              image={item.iconImage}
              altProperty={item.iconAltProperty}
              name={item.iconName}
            />
          );
        })}
      </div>
      <div className="techstack_icon_container">
        {techstackData.map((item, index) => {
          return (
            <TechStackIconContainer
              key={item.id}
              image={item.iconImage}
              altProperty={item.iconAltProperty}
              name={item.iconName}
            />
          );
        })}
      </div>
    </div>
  );
}
