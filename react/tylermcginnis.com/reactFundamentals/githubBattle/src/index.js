import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div>
        Hi React Training!
      </div>
    )
  }
}

ReactDOM.render(
  <App />, document.getElementById("root")
);
