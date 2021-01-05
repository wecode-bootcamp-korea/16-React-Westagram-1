import React, { Component } from "react";

class StoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
