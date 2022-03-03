import "./styles.css";
import LinkDisplay from "./Components/LinkDisplay/LinkDisplay";
import ShortenLink from "./Components/ShortenLink/ShortenLink";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <ShortenLink />
      <LinkDisplay />
      <Footer />
    </div>
  );
}
