import "./App.css";
import { Button, SecondButton } from "./Buttons";
import Header from "../src/components/Header";

function App() {
  return (
    <div>
      <Header />
      <Button>Click me</Button>
      <SecondButton>Click me too</SecondButton>
    </div>
  );
}

export default App;
