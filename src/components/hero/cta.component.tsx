import React from "react";
import CV_esp from "../../assets/cv/CV-DiegoSanchez.pdf";
import "../custom-button/custom-button.component.scss";

const CTA = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
      <a className="button button__primary" href={CV_esp} download>
        Download CV
      </a>
      <a className="button button__secondary" href="/contact">
        Contact Me
      </a>
    </div>
  );
};

export default CTA;
