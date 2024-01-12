import React from "react";
import "./index.scss";
const About = () => {
  return (
    <>
      <section id="about">
        <div className="about_container">
          <div className="about_area">
            <div className="about_title">
              <h2>About Us</h2>
            </div>
            <div className="about_content">
              <div className="about_img">
                <img src="https://preview.colorlib.com/theme/nitro/images/hero_1.jpg" alt="" />
              </div>
              <div className="about_text">
                <h3>For the next great business</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  tempora cumque eligendi in nostrum labore omnis quaerat.
                </p>
                <ul>
                  <li>Officia quaerat eaque neque</li>
                  <li>Possimus aut consequuntur incidunt</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipisicing elit</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
