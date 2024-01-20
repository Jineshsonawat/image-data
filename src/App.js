import "./App.css";
import { HomeDialog } from "./components/HomePage/HomeDialog";
import { HomeHeading } from "./components/HomePage/HomeHeading";
import { HomeNavBar } from "./components/HomePage/HomeNavBar";
import { HomeSearchBar } from "./components/HomePage/HomeSearchBar";
import { HomeSuggestion } from "./components/HomePage/HomeSuggestion";
import { ImageDetailDialog } from "./components/HomePage/ImageDetailDialog";
import { ResultStatus } from "./components/HomePage/ResultStatus";
import { useMain } from "./context/main-context";

function App() {
  const { booleanValue, valueToShowDialog } = useMain();

  return (
    <div className="background">
      {valueToShowDialog && <ImageDetailDialog />}
      <HomeNavBar />
      {booleanValue && <HomeHeading />}
      <HomeSearchBar />
      {booleanValue && <HomeSuggestion />}
      {!booleanValue && <ResultStatus />}
      {!booleanValue && <HomeDialog />}
    </div>
  );
}

export default App;
