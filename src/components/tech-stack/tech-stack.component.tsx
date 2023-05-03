import React from "react";
import "./tech-stack.component.scss";
import SectionTitle from "../section-title/section-title.component";
import techStackArray from "../../utils/teck-stack-array";

const TechStack = () => {
  return (
    <section className="tech-stack">
      <SectionTitle text="Tech Stack" />
      <div className="tech-stack__container">
        {techStackArray.map((tech, idx) => {
          const { icon, experience, name } = tech;
          const Icon = icon;
          return (
            <div key={idx} className="tech-stack__card">
              <h4 className="tech-stack__experience--name">{name}</h4>
              <Icon className="tech-stack__icon" />
              <h4 className="tech-stack__experience">{experience}+ years</h4>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TechStack;
