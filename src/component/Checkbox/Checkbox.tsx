import React from "react";
import styles from "./Checkbox.module.css";
import { CheckboxProps } from "../TS/Dropdown.types";

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  const handleClick = () => {
    onChange(!checked);
  };

  return (
    <div
      className={`${styles.elem} ${checked ? styles.checked : ""}`}
      onClick={handleClick}
    ></div>
  );
};

export default Checkbox;
