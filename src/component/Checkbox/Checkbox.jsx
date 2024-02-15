import styles from "./Checkbox.module.css";

export default function Checkbox({ checked, onChange }) {
  const handleClick = () => {
    onChange(!checked);
  };
  return (
    <div
      className={`${styles.elem} ${styles.checkbox} ${
        checked ? styles.checked : ""
      }`}
      onClick={handleClick}
    ></div>
  );
}
