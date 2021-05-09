import "./App.css";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { redTheme, greenTheme, blueTheme } from "./components/themes";
import NavBar from "./components/navBar";
import Button from "./components/theming/Button";
import Content from "./components/content";

function App() {
  const [theme, setTheme] = useState(redTheme);

  const handleTheme = () => {
    if (theme.primaryColor === "red") {
      setTheme(greenTheme);
    } else if (theme.primaryColor === "green") {
      setTheme(blueTheme);
    } else {
      setTheme(redTheme);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <main>
        <NavBar>
          <Button onClick={handleTheme}>Toggle Theme</Button>
        </NavBar>
        <Content />
      </main>
    </ThemeProvider>
  );
}

export default App;
