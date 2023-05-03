import React from "react";
import { AvailableButtonName } from "./available-buttons.interface";
import "./custom-button.component.scss";

export interface CustomButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonClick?: Function;
  buttonType: AvailableButtonName;
  text: string;
}

const CustomButton = ({
  buttonClick,
  buttonType = "primary",
  text,
  ...props
}: CustomButton) => {
  const availableButton = {
    primary: "primary",
    secondary: "secondary",
    tertiary: "tertiary",
  };

  const handleClick = () => {
    if (buttonClick) {
      buttonClick();
    }
  };

  return (
    <button
      className={`button button__${availableButton[buttonType]}`}
      onClick={handleClick}
      {...props}
    >
      {text}
    </button>
  );
};

export default CustomButton;
