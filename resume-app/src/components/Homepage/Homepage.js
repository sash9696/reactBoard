import "./Homepage.css";
import githubIcon from "../../images/github.png";
import linkedinIcon from "../../images/linkedin.png";

export default function Homepage() {
  return (
    <div id="homepage" className="homepage_container">
      <div className="homepage_left">
        <p className="homepage_left_h1">
          <span className="red_color">Hi,</span>my name is
        </p>
        <p className="homepage_left_h2">Sahil Chopra</p>
        <p className="homepage_left_h3">
          Developer at <span className="red_color">Somewhere Pvt Ltd</span>
        </p>
        <p className="homepage_left_description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus
          massa ante, vitae faucibus dui venenatis eget. Donec vel ornare lorem.
          Aliquam a metus eget eros feugiat feugiat ac nec nulla. Nam ac erat
          elementum, sollicitudin leo in, posuere mi. Ut malesuada quam vel
          turpis auctor aliquam. Vivamus id nunc feugiat, pellentesque magna ac,
          placerat risus. Nam aliquam aliquam ultricies. In libero magna,
          tristique a ligula vitae, posuere venenatis nibh. In leo libero,
          porttitor id neque nec, rutrum dictum velit. Ut porta risus nec mi
          fermentum rutrum.
        </p>
        <div>
          <a href="#" target="_blank">
            <img src={githubIcon} alt="githubIcon" className="homepage_logo" />
          </a>
          <a href="#" target="_blank">
            <img
              src={linkedinIcon}
              alt="linkedinIcon"
              className="homepage_logo"
            />
          </a>
        </div>
        <a href="mailto:sahilchopra838@gmail.com">
          <button className="homepage_left_button">Get in Touch</button>
        </a>
      </div>

      <div className="homepage_right">
        <img
          src="https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif"
          alt="GIF"
        />
      </div>
    </div>
  );
}
