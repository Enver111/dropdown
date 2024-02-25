import React from "react";
import { LanguageItem, LangSelectProps } from "../TS/Dropdown.types";
import Checkbox from "../Checkbox/Checkbox";
import styles from "./LangSelect.module.css";

const LangSelect: React.FC<LangSelectProps> = ({
  items,
  selectedLanguages,
  onLanguageChange,
  onRemoveLanguage,
  searchInput,
}) => {
  const handleCheckboxToggle = (item: LanguageItem) => {
    if (selectedLanguages.some((lang) => lang.value === item.value)) {
      onRemoveLanguage(item);
    } else {
      onLanguageChange(item);
    }
  };
  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(searchInput.toLowerCase())
  );
  return (
    <>
      {filteredItems.map((item) => (
        <div className={styles.language} key={item.value}>
          <div className={styles.img}>
            <img src={item.flag} alt="flag" />
          </div>
          <p className={styles.item}>{item.label}</p>
          <Checkbox
            checked={selectedLanguages.some(
              (lang) => lang.value === item.value
            )}
            onChange={() => handleCheckboxToggle(item)}
          />
        </div>
      ))}
    </>
  );
};

export default LangSelect;
