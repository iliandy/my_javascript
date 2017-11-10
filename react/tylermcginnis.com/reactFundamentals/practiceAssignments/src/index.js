import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Users extends React.Component {
  render() {
    const friends = this.props.list.filter((user) => {
      return user.friend
    });

    const nonFriends = this.props.list.filter((user) => {
      return !user.friend
    });

    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {friends.map((user) =>
            <li key={user.name}> {user.name} </li>
          )}
        </ul>

        <hr />

        <h1>Non Friends</h1>
        <ul>
          {nonFriends.map((user) =>
            <li key={user.name}> {user.name} </li>
          )}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <Users list={[
    { name: 'Tyler', friend: true },
    { name: 'Ryan', friend: true },
    { name: 'Michael', friend: false },
    { name: 'Mikenzi', friend: false },
    { name: 'Jessica', friend: true },
    { name: 'Dan', friend: false },
  ]} />,
  document.getElementById('root')
);
