import React, { useState } from "react";
import { LanguageItem } from "../TS/Dropdown.types";
import Arrow from "../../img/arrow.svg";
import Cross from "../../img/cross.svg";
import Russia from "../../img/Russia.svg";
import England from "../../img/England.svg";
import Germany from "../../img/Germany.svg";
import Italy from "../../img/Italy.svg";
import Poland from "../../img/Poland.svg";
import Spain from "../../img/Spain.svg";
import LangSelect from "../LangSelect/LangSelect";
import styles from "./Dropdown.module.css";

const Dropdown: React.FC = () => {
  const [langOpen, setLangOpen] = useState<boolean>(true);
  const [selectedLanguages, setSelectedLanguages] = useState<LanguageItem[]>(
    []
  );
  const [searchInput, setSearchInput] = useState<string>("");

  const items: LanguageItem[] = [
    { label: "Русский", flag: Russia, value: "russian" },
    { label: "Английский", flag: England, value: "english" },
    { label: "Испанский", flag: Spain, value: "spanish" },
    { label: "Немецкий", flag: Germany, value: "german" },
    { label: "Итальянский", flag: Italy, value: "italian" },
    { label: "Польский", flag: Poland, value: "polish" },
  ];

  const handleLanguageChange = (language: LanguageItem) => {
    selectedLanguages.some((lang) => lang.value === language.value)
      ? setSelectedLanguages(
          selectedLanguages.filter((item) => item.value !== language.value)
        )
      : setSelectedLanguages([...selectedLanguages, language]);
  };

  const handleRemoveLanguage = (language: LanguageItem) => {
    setSelectedLanguages(
      selectedLanguages.filter((item) => item.value !== language.value)
    );
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  return (
    <>
      <div className={styles.label}>Язык</div>
      <div className={styles.head}>
        <div className={styles.wrap}>
          {selectedLanguages.map((item, index) => (
            <div className={styles.addLang} key={index}>
              <p className={styles.langText}>{item.label}</p>
              <img
                className={styles.cross}
                src={Cross}
                alt="cross"
                onClick={() => handleRemoveLanguage(item)}
              />
            </div>
          ))}
        </div>
        <img
          className={`${styles.arrow} ${langOpen ? styles.active : ""}`}
          src={Arrow}
          alt="arrow"
          onClick={() => setLangOpen(!langOpen)}
        />
      </div>
      <div className={`${styles.info} ${langOpen ? styles.hidden : ""}`}>
        <input
          className={styles.search}
          type="text"
          placeholder="Поиск"
          value={searchInput}
          onChange={handleSearchChange}
        />
        <LangSelect
          items={items}
          onLanguageChange={handleLanguageChange}
          selectedLanguages={selectedLanguages}
          onRemoveLanguage={handleRemoveLanguage}
          searchInput={searchInput}
        />
      </div>
    </>
  );
};

export default Dropdown;
