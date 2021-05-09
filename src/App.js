import "./App.css";
import { ThemeProvider } from "styled-components";
import { redTheme, greenTheme, blueTheme } from "./components/themes";
import NavBar from "./components/navBar";
import Button from "./components/Button";
import { Content } from "./components/content";
// import PropsButton from "./components/propsbutton";
// import StyledWrapper from "./examples/AlternativeHeader";
// import { createGlobalStyle } from "styled-components";

// const GlobalStyle = createGlobalStyle`
//   * {
//     margin: 0;
//     box-sizing: border-box;
//     font-family: Verdana, Geneva, Tahoma, sans-serif;
//   }
// `;

function App() {
  return (
    <ThemeProvider theme={blueTheme}>
      <main>
        <NavBar>
          <Button>Toggle Theme</Button>
        </NavBar>
        <Content />
      </main>
    </ThemeProvider>
  );
}

export default App;
