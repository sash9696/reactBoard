import ExperienceCard from "./ExperienceCard/ExperienceCard";
import c from "../../images/c.png";
import js from "../../images/js.png";
import css from "../../images/css.png";
import html from "../../images/html.png";
import "./Experience.css";

export default function Experience() {
  //company name
  //designation
  //description
  //images

  const statements = [
    "1. I am working as an SDE Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec mi molestie, gravida augue id, sollicitudin ex",
    "2. I have create various features like Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec mi molestie, gravida augue id, sollicitudin ex",
    "3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec mi molestie, gravida augue id, sollicitudin ex",
    "4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec mi molestie, gravida augue id, sollicitudin ex",
    "5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec mi molestie, gravida augue id, sollicitudin ex",
  ];

  const iconImages = [c, js, css, html];

  return (
    <div id="experience" className="experience_container">
      <p className="experience_title">Experience</p>
      <div className="experience_cards_container">
        <ExperienceCard
          companyName="ABC PVT LTD"
          designation="SDE"
          statements={statements}
          iconImages={iconImages}
        />
        <ExperienceCard
          companyName="XYZ PVT LTD"
          designation="SDE"
          statements={statements}
          iconImages={iconImages}
        />
        <ExperienceCard
          companyName="DEF PVT LTD"
          designation="Programmer Analyst"
          statements={statements}
          iconImages={iconImages}
        />
      </div>
    </div>
  );
}
