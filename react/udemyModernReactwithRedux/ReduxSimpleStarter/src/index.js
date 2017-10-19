import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyD-sJMng531xBH4TcTuK-pud4OxSg74GrU";

// create component to generate HTML
const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  );
}

// place component generated HTML and put it into page/DOM
ReactDOM.render(<App/>, document.querySelector(".container"));
