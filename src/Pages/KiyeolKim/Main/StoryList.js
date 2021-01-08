import React, { Component } from "react";

class StoryList extends Component {
  render() {
    const { userName } = this.props;
    return (
      <li>
        <img
          src="../images/KiyeolKim/westagram--profile.jpg"
          alt="westagram--profile"
        />
        <p>{userName}</p>
      </li>
    );
  }
}

export default StoryList;
