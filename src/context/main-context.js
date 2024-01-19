import { createContext, useContext } from "react";
import { useState } from "react";

const mainContext = createContext({ value: false });

function MainProvider({ children }) {
  const [booleanValue, setBooleanValue] = useState(true);
  const [userValue, setUserValue] = useState("");

  function onClickSearchButton() {
    setBooleanValue(!booleanValue);
  }

  function onChangeinputValue(event) {
    setUserValue(event.target.value);
  }
  return (
    <mainContext.Provider
      value={{
        booleanValue,
        userValue,
        onClickSearchButton,
        onChangeinputValue,
      }}
    >
      {children}
    </mainContext.Provider>
  );
}

const useMain = () => useContext(mainContext);

export { MainProvider, useMain };
