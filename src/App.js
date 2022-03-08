// import "./styles.css";
import styles from "./App.module.css";
import LinkDisplay from "./Components/LinkDisplay/LinkDisplay";
import ShortenLink from "./Components/ShortenLink/ShortenLink";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        <ShortenLink />
      </div>
      <Footer />
    </div>
  );
}
