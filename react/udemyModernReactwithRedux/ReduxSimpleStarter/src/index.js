import React from "react";
import ReactDOM from "react-dom";

import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyD-sJMng531xBH4TcTuK-pud4OxSg74GrU";

YTSearch({ key: API_KEY, term: "Pixel 2 XL"}, function(data) {
  console.log(data);
});

// create component to generate HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// place component generated HTML and put it into page/DOM
ReactDOM.render(<App/>, document.querySelector(".container"));
