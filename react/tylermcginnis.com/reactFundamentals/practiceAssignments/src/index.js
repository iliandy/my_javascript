import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Users extends React.Component {
  render() {
    return (
      <ul>
        {this.props.list.map((name) =>
          <li key={name}> {name} </li>
        )}
      </ul>
    )
  }
}

ReactDOM.render(
  <Users list={['Tyler', 'Mikenzi', 'Ryan', 'Michael']} />,
  document.getElementById('root')
);
