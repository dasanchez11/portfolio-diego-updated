import SectionTitle from "../section-title/section-title.component";
import React, { useState } from "react";
import { ActiveSection } from "./active-section.models";
import "./portfolio.component.scss";
import { pojectsList } from "../../utils/projects-list";
import PortfolioCard from "../portfolio-card/portfolio-card.component";
import "./portfolio.component.scss";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState<ActiveSection>("all");

  const handleClick = (section: ActiveSection) => {
    setActiveSection(section);
  };

  return (
    <div id="portfolio" className="portfolio">
      <SectionTitle text="Portfolio Projects" />
      <div className="portfolio__container">
        <div className="portfolio__section">
          <span
            onClick={() => handleClick("webDevelopment")}
            className={`portfolio__section-link ${
              activeSection === "webDevelopment" ? "active" : ""
            }`}
          >
            Front-End
          </span>
          <span
            onClick={() => handleClick("backEnd")}
            className={`portfolio__section-link ${
              activeSection === "backEnd" ? "active" : ""
            }`}
          >
            Back-End
          </span>
          <span
            onClick={() => handleClick("machineLearning")}
            className={`portfolio__section-link ${
              activeSection === "machineLearning" ? "active" : ""
            }`}
          >
            Machine Learning
          </span>
          <span
            onClick={() => handleClick("python")}
            className={`portfolio__section-link ${
              activeSection === "python" ? "active" : ""
            }`}
          >
            Python
          </span>
          <span
            onClick={() => handleClick("all")}
            className={`portfolio__section-link ${
              activeSection === "all" ? "active" : ""
            }`}
          >
            All
          </span>
        </div>
        <div className="portfolio__card-container">
          {pojectsList
            .filter((data) => {
              if (activeSection === "all") {
                return !data.tags.includes("");
              }
              return data.tags.includes(activeSection);
            })
            .map((data, idx) => {
              return <PortfolioCard key={data._id} cardData={data} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
