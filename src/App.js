import "./styles.css";
import LinkDisplay from "./Components/LinkDisplay/LinkDisplay";
import Button from "./Components/UI/Button/Button";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Button>Button</Button>
      <LinkDisplay />
    </div>
  );
}
