import React from "react";
import Checkbox from "../Checkbox/Checkbox";
import styles from "./LangSelect.module.css";

export default function LangSelect({
  items,
  selectedLanguages,
  onLanguageChange,
  onRemoveLanguage,
  searchInput,
}) {
  const handleCheckboxToggle = (item) => {
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
            item={item}
          />
        </div>
      ))}
    </>
  );
}
