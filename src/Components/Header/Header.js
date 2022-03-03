import styles from "./Header.module.css";
import headerImage from "../../Assets/Images/person.png";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Sam's Short Links</h1>
        <p>Make your links your own</p>
      </div>
      <div className={styles.image}>
        <img src={headerImage} alt="Person" />
      </div>
    </div>
  );
};

export default Header;
