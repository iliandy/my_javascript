import React from "react";
import ReactDOM from "react-dom";

// create component to generate HTML
const App = () => {
  return <div>Hi world!</div>;
}

// place component generated HTML and put it into page/DOM
ReactDOM.render(<App/>, document.querySelector(".container"));
