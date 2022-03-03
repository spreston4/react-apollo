import styles from "./Button.module.css";

// Reusable button component. Inherits className and Onclick from parent.
const Button = (props) => {
  // Conditional formatting based
  const buttonClasses = `${styles.button} ${props.className}`;

  return (
    <button
      className={buttonClasses}
      onClick={props.onClick}
      type={props.type}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
