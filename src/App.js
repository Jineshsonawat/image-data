import "./App.css";
import { HomeDialog } from "./components/HomePage/HomeDialog";
import { HomeHeading } from "./components/HomePage/HomeHeading";
import { HomeNavBar } from "./components/HomePage/HomeNavBar";
import { HomeSearchBar } from "./components/HomePage/HomeSearchBar";
import { HomeSuggestion } from "./components/HomePage/HomeSuggestion";
import { ResultStatus } from "./components/HomePage/ResultStatus";
import { useMain } from "./context/main-context";

function App() {
  const { booleanValue } = useMain();
  return (
    <div className="background">
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
