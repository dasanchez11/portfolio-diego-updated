import React from "react";
import CTA from "./cta.component";
import "./hero.component.scss";
import HeroSocials from "./hero-socials.component";
import Picture from "../../assets/pictures/Picture1.png";
import Linkedin from "../../assets/icons/linkedin.svg";
import Github from "../../assets/icons/github.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <h5>Hello, I'am</h5>
        <h1>Diego</h1>
        <h5 className="hero__text-light"> a Full Stack Developer</h5>
        <div className="hero__cta">
          <CTA />
        </div>
        <HeroSocials />
        <div className="hero__picture">
          <div className="hero__picture-container">
            <img className="hero__img" src={Picture} alt="me"></img>
          </div>
        </div>
        <a className="hero__scroll-down" href="#portfolio">
          Scroll Down
        </a>
        <div className="hero__socials-mobile">
          <a
            className="link"
            href="https://www.linkedin.com/in/dasanchez11"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="hero__icon" />
          </a>
          <a
            className=""
            href="https://github.com/dasanchez11"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="hero__icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
