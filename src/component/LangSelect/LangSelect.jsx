import React from "react";
import Checkbox from "../Checkbox/Checkbox";
import './LangSelect.css';

export default function LangSelect({ items, selectedLanguages, onLanguageChange, onRemoveLanguage, searchInput }) {
    const handleCheckboxToggle = (item) => {
        if (selectedLanguages.some(lang => lang.value === item.value)) {
            onRemoveLanguage(item);
        } else {
            onLanguageChange(item);
        }
    };

    const filteredItems = items.filter(item =>
        item.label.toLowerCase().includes(searchInput.toLowerCase())
    );
    return (
        <>
            {filteredItems.map(item => (
                <div className="language" key={item.value}>
                    <div className="img">
                        <img src={item.flag} alt="flag" />
                    </div>
                    <p>{item.label}</p>
                    <Checkbox
                        checked={selectedLanguages.some(lang => lang.value === item.value)}
                        onChange={() => handleCheckboxToggle(item)}
                        item={item}
                    />
                </div>
            ))}
        </>
    );
}

