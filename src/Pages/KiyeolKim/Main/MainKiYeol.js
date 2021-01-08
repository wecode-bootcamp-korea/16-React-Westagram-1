import React, { Component } from "react";
import CommentList from "./CommentList";
import RecommendList from "./RecommendList";
import StoryList from "./StoryList";
import { circleSVG, feedStatusSVG } from "./svgData";
import "../../../styles/common.scss";
import "./Main.scss";

class MainKiYeol extends Component {
  constructor() {
    super();
    this.state = {
      commentValue: "",
      commentList: [],
      recommendList: [],
      storyList: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/data.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          commentList: res.CommentData,
          recommendList: res.RecommendData,
          storyList: res.StoryData,
        });
      });
  }

  handleCommentCreate = (data) => {
    const { commentList, commentValue } = this.state;

    const user = {
      id: commentList.length + 1,
      userName: "ky_day",
      content: commentValue,
    };

    this.setState({
      commentList: [...commentList, user],
      commentValue: "",
    });
  };

  handleKeyCommentCreate = (e) => {
    e.key === "Enter" && this.handleCommentCreate();
  };

  handleCommentInfo = (e) => {
    this.setState({ commentValue: e.target.value });
  };

  render() {
    const { commentList, commentValue, recommendList, storyList } = this.state;
    const {
      handleCommentInfo,
      handleKeyCommentCreate,
      handleCommentCreate,
    } = this;

    return (
      <>
        {/* Main navbar */}
        <nav className="MainKiYeol">
          <div className="nav__group">
            <div className="nav__left">
              <img
                src="../images/KiyeolKim/instagram.png"
                alt="instagramlogo"
              />
              <h1 className="main__title">Westagram</h1>
            </div>
            <div className="nav__center">
              <i className="fas fa-search"></i>
              <input type="search" placeholder="검색" />
            </div>
            <div className="nav__right">
              <img src="../images/KiyeolKim/explore.png" alt="explore" />
              <img src="../images/KiyeolKim/heart.png" alt="heart" />
              <img src="../images/KiyeolKim/profile.png" alt="profile" />
            </div>
          </div>
        </nav>

        {/* Westagram Content */}
        <main className="main__content">
          <section className="section__group">
            <div className="westagram__group__box">
              {/* Westagram Story */}
              <ul className="westagram__story__box">
                {storyList.map((story) => {
                  return <StoryList key={story.id} userName={story.userName} />;
                })}
              </ul>
              <article className="westagram__feed__box">
                {/* Feed Header */}
                <div className="westagram__feed__header">
                  <img
                    src="../images/KiyeolKim/myprofile.jpg"
                    alt="my--profile"
                  />
                  <div className="feed__name__box">
                    <a href="#!">ky_day</a>
                    {circleSVG}
                  </div>
                </div>
                {/* Feed Photo */}
                <div className="westagram__feed__photo">
                  <img
                    src="../images/KiyeolKim/happynewyear.jpg"
                    alt="2021jpg"
                  />
                </div>
                {/* Feed status icon */}
                <div className="westagram__feed__status">
                  <button
                    onClick={(e) => !e.target.classList.toggle("myLikeOn")}
                  >
                    {feedStatusSVG[0]}
                  </button>
                  <button>{feedStatusSVG[1]}</button>
                  <button>{feedStatusSVG[2]}</button>
                </div>
                <div className="westagram__feed__love"></div>
                {/* Feed Info */}
                <div className="westagram__feed__info">
                  <p>ky_day</p>
                  <span>...</span>
                  <button>더 보기</button>
                </div>
                {/* Feed Comment ADD List */}
                <ul id="feed__comment__add">
                  {commentList.map((content) => {
                    return (
                      <CommentList
                        userName={content.userName}
                        commentValue={content.content}
                        key={content.id}
                      />
                    );
                  })}
                </ul>
                {/* Feed Comment Input */}
                <div className="westagram__feed__comment">
                  <input
                    type="text"
                    placeholder="댓글 달기..."
                    value={commentValue}
                    onChange={handleCommentInfo}
                    onKeyPress={!commentValue ? null : handleKeyCommentCreate}
                    className="feed__comment__input"
                  />

                  <button
                    className="feed__comment__Btn"
                    onClick={handleCommentCreate}
                    disabled={!commentValue}
                  >
                    게시
                  </button>
                </div>
              </article>
            </div>

            {/* Feed Aside */}
            <aside className="westagram__feed__aside">
              <div className="recommend__profile__box">
                <img
                  src="../images/KiyeolKim/myprofile.jpg"
                  alt="my--profile"
                />
                <div className="profile__box">
                  <p>ky_day</p>
                  <p className="profile__introduce">korea Kim</p>
                  <a href="#!">전환</a>
                </div>
                <div className="recommend__info__box">
                  <p>회원님을 위한 추천</p>
                  <a href="#!">모두 보기</a>
                </div>
              </div>

              {/* Feed Recommend */}
              <div className="recommend__box">
                <ul className="profile__box">
                  {recommendList.map((list) => {
                    return (
                      <RecommendList
                        key={list.id}
                        userName={list.userName}
                        follower={list.follower}
                      />
                    );
                  })}
                </ul>
              </div>

              {/* Feed Copyright */}
              <div className="westagram__copyright">
                <p>© 2020 WESTAGRAM FROM Kiyeol Kim</p>
              </div>
            </aside>
          </section>
        </main>
      </>
    );
  }
}

export default MainKiYeol;
