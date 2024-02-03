import './Checkbox.css';

export default function Checkbox({ checked, onChange }) {
    const handleClick = () => {
        onChange(!checked); 
    };
    return (
        <div className={`elem checkbox ${checked ? "checked" : ""}`} onClick={handleClick}></div>
    );
}

