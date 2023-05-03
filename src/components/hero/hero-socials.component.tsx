import React from "react";
import Linkedin from "../../assets/icons/linkedin.svg";
import Github from "../../assets/icons/github.svg";

const HeroSocials = () => {
  return (
    <div className="hero__socials">
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
  );
};

export default HeroSocials;
