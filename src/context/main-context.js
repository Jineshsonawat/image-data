import { createContext, useContext } from "react";
import { useState } from "react";

const mainContext = createContext({ value: false });

function MainProvider({ children }) {
  const [booleanValue, setBooleanValue] = useState(true);
  const [userValue, setUserValue] = useState("");
  const [showUserValue, setShowUserValue] = useState("");
  const [imageDataFromApi, setImageDataFromApi] = useState([]);
  const [loader, showLoader] = useState("");
  const [valueToShowDialog, setValueToShowDialog] = useState(false);
  const [imageDetail, setImageDetail] = useState({});

  function clickToViewDetails(item) {
    setValueToShowDialog(!valueToShowDialog);
    setImageDetail({ ...item });
  }

  function handleKeywordClick(event) {
    setUserValue(event.target.innerText);
    onClickSearchButton(event.target.innerText);
  }

  function onChangeinputValue(event) {
    setUserValue(event.target.value);
  }

  function onClickSearchButton(searchStr) {
    showLoader("loading");
    setBooleanValue(false);
    setShowUserValue(searchStr);
    setUserValue("");

    const key = process.env.REACT_APP_PIXABAY_API_KEY;
    const url =
      "https://pixabay.com/api/" +
      `?key=${key}` +
      `&q=${searchStr}` +
      `&per_page=6`;

    try {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setImageDataFromApi(data.hits);
          showLoader("success");
        })
        .catch((err) => {
          showLoader("failed");
        });
    } catch (error) {
      showLoader("failed");
    }
  }

  return (
    <mainContext.Provider
      value={{
        booleanValue,
        userValue,
        onClickSearchButton,
        onChangeinputValue,
        showUserValue,
        imageDataFromApi,
        loader,
        clickToViewDetails,
        valueToShowDialog,
        imageDetail,
        handleKeywordClick,
      }}
    >
      {children}
    </mainContext.Provider>
  );
}

const useMain = () => useContext(mainContext);

export { MainProvider, useMain };
