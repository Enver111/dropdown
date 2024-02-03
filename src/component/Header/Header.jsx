import React from 'react';
import { useState } from 'react';
import Arrow from '../../img/arrow.svg'
import Cross from '../../img/cross.svg'
import Russia from "../../img/Russia.svg";
import England from "../../img/England.svg";
import Germany from "../../img/Germany.svg";
import Italy from "../../img/Italy.svg";
import Poland from "../../img/Poland.svg";
import Spain from "../../img/Spain.svg";
import LangSelect from '../LangSelect/LangSelect';
import './Header.css';


export default function Header() {
    const [langOpen, setLangOpen] = useState(true);
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    const items = [
        { label: 'Русский', flag: Russia, value: 'russian'},
        { label: 'Английский', flag: England, value: 'english'},
        { label: 'Испанский', flag: Spain, value: 'spanish' },
        { label: 'Немецкий', flag: Germany, value: 'german' },
        { label: 'Итальянский', flag: Italy, value: 'italian' },
        { label: 'Польский', flag: Poland, value: 'polish' }
    ];

    const handleLanguageChange = (language) => {
        if (selectedLanguages.includes(language)) {
            setSelectedLanguages(selectedLanguages.filter(item => item !== language));
        } else {
            setSelectedLanguages([...selectedLanguages, language]);
        }
    }
    const handleRemoveLanguage = (language) => {
        setSelectedLanguages(selectedLanguages.filter(item => item !== language));
    }
    const handleCheckboxToggle = (language) => {
        if (selectedLanguages.includes(language)) {
            setSelectedLanguages(selectedLanguages.filter(item => item !== language));
        } else {
            setSelectedLanguages([...selectedLanguages, language]);
        }
    }
    const handleSearchChange = (event) => {
        setSearchInput(event.target.value);
    };

    return (
        <>
            <div id='label'>Язык</div>
            <div className='head'>
                {selectedLanguages.map((item, index) => (
                <div className='addLang' key={index}>
                    <p className='langText'>{item.label}</p>
                    <img className='cross' src={Cross} alt="cross" onClick={() => handleRemoveLanguage(item)}/>
                </div>
                ))}
                <img className={`arrow ${langOpen ? "active" : ""}`} 
                    src={Arrow} alt="arrow"
                    onClick={() => setLangOpen(!langOpen)}/>
            </div>
            <div className={`info ${langOpen ? "hidden" : ""}`}>
                <input id='search' type="text" placeholder='Поиск' value={searchInput} onChange={handleSearchChange} />
                <LangSelect 
                    items={items} 
                    onLanguageChange={handleLanguageChange} 
                    selectedLanguages={selectedLanguages} 
                    onRemoveLanguage={handleRemoveLanguage} 
                    onCheckboxToggle={handleCheckboxToggle} 
                    searchInput={searchInput} 
                />
            </div>
        </>
    )
}


