import "./App.css";
import search from "./images/searchIcon.png";

function App() {
  return (
    <div className="background">
      <nav className="navbar font-18 text-colot-white flex-container-space column-gap-20 font-weight-600">
        <div className="flex-1">Homepage</div>
        <div>Login</div>
        <button className="border text-colot-white font-weight-600 font-18">
          Create Account
        </button>
      </nav>

      <section className="flex-container-center align-items-center text-colot-white font-weight-700 font-70">
        <div className="heading-text">
          Discover over 2,000,000 free Stock Images
        </div>
      </section>

      <section className="text-colot-white  flex-container-center ">
        <div className="search-bar flex-container-center column-gap-15">
          <img
            style={{ width: "22px", height: "22px" }}
            src={search}
            alt="icon"
          />
          <input placeholder="Search" className="flex-1 transparent-input" />
          <button className="border-button-go text-colot-white font-18 font-weight-600">
            GO!
          </button>
        </div>
      </section>

      <section className="flex-container-center">
        <div className="suggestion text-colot-white font-weight-400 font-13 flex-container-center">
          <p>
            <span className="font-weight-700">Trending: </span>flowers, love,
            forest, river
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
