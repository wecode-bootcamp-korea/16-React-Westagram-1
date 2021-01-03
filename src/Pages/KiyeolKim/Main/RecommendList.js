import React, { Component } from "react";

class RecommendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendList: [
        {
          id: 1,
          userName: "recommend friend",
          follower: "friend02",
        },
        {
          id: 2,
          userName: "recommend friend",
          follower: "friend03",
        },
        {
          id: 3,
          userName: "recommend friend01",
          follower: "friend04",
        },
        {
          id: 4,
          userName: "recommend friend01",
          follower: "friend01",
        },
      ],
    };
  }

  render() {
    return (
      <div className="recommend__box">
        {this.state.recommendList.map((e, idx) => {
          return (
            <>
              <img
                src="../images/KiyeolKim/recommend--profile.png"
                alt="recommend--profile"
              />
              <div className="profile__box">
                <p>recommend friend0{e.id}</p>
                <p className="profile__introduce">
                  {e.follower}님이 팔로우 합니다
                </p>
                <a href="#!">팔로우</a>
              </div>
            </>
          );
        })}
      </div>
    );
  }
}

export default RecommendList;
