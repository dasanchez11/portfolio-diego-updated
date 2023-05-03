import React from "react";
import { CardData } from "./portfolio-card.model";
import { IconComponents } from "../../utils/tech-icons";
import "./portfolio-card.component.scss";

const PortfolioCard: React.FC<{ cardData: CardData }> = ({ cardData }) => {
  const { title, shortDescription, resources, gitHubLink, liveLink, image } =
    cardData;

  const gitHubClick = () => {
    window.open(gitHubLink, "_blank", "noopener,noreferrer");
  };

  const liveLinkClick = () => {
    window.open(liveLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="card" style={{ backgroundImage: `url(${image})` }}>
      <div className="card__cover">
        <h3 className="card__title">{title}</h3>
        <h5>{shortDescription}</h5>
        <div className="card__technologies">
          {resources.map((resource, idx) => {
            const CompIcon = IconComponents[`${resource}`];
            if (typeof CompIcon === "undefined") {
              return <div key={idx} />;
            }
            return (
              <CompIcon
                key={idx}
                className="card__technology"
                height="40px"
                width="40px"
              />
            );
          })}
        </div>
        <div className="card__links">
          <a
            className="button button__primary"
            target="_blank"
            rel="noreferrer"
            onClick={gitHubClick}
          >
            GitHub
          </a>
          {liveLink !== "" ? (
            <a
              className="button button__secondary"
              target="_blank"
              rel="noreferrer"
              onClick={liveLinkClick}
            >
              Live Demo
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
