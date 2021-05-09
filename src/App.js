import "./App.css";
import { Banner, SecondBanner } from "./components/banners";

function App() {
  return (
    <div>
      <Banner>
        <h1>First Banner</h1>
      </Banner>
      <SecondBanner>
        <h1>Second Banner</h1>
      </SecondBanner>
    </div>
  );
}

export default App;
