import { useMain } from "../../context/main-context";
import search from "../../images/searchIcon.png";

function HomeSearchBar() {
  const { onClickSearchButton, onChangeinputValue, userValue } = useMain();

  return (
    <section className="text-colot-white  flex-container-center ">
      <div className="search-bar flex-container-center column-gap-15">
        <img
          style={{ width: "22px", height: "22px" }}
          src={search}
          alt="icon"
        />
        <input
          onChange={onChangeinputValue}
          value={userValue}
          placeholder="Search"
          className="flex-1 transparent-input"
        />
        <button
          onClick={(_) => onClickSearchButton(userValue)}
          className="border-button-go text-colot-white font-18 font-weight-600"
        >
          GO!
        </button>
      </div>
    </section>
  );
}

export { HomeSearchBar };
