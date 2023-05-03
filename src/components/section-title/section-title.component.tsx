import React from "react";
import "./section-title.component.scss";

const SectionTitle = ({ text }: { text: string }) => {
  return (
    <div className="title">
      <h2 className="title__text">{text}</h2>
    </div>
  );
};

export default SectionTitle;
