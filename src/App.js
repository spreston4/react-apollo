import "./styles.css";
import LinkDisplay from "./Components/LinkDisplay/LinkDisplay";
import ShortenLink from "./Components/ShortenLink/ShortenLink";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ShortenLink />
      <LinkDisplay />
    </div>
  );
}
