import React, { Component } from "react";

class RecommendList extends Component {
  render() {
    const { userName, follower } = this.props;
    return (
      <li>
        <img
          src="../images/KiyeolKim/recommend--profile.png"
          alt="recommend--profile"
        />
        <p>{userName}</p>
        <p className="profile__introduce">{follower}님이 팔로우 합니다</p>
        <a href="#!">팔로우</a>
      </li>
    );
  }
}

export default RecommendList;
