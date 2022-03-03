import styles from "./TextInput.module.css";

// Reusable text input component - accepts id, onChange, & placeholder as props - accepts styling from parent component as className prop
const TextInput = (props) => {
  // Combine input styling with styling from parent component
  const inputClasses = `${styles.container} ${props.className}`;

  return (
    <div className={inputClasses}>
      <input
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
        type="text"
      />
    </div>
  );
};

export default TextInput;
