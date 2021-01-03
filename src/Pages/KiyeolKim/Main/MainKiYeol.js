import React, { Component } from "react";
import CommentList from "./CommentList";
import RecommendList from "./RecommendList";
import "./Main.scss";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      commentValue: "",
      commentList: [],
    };
  }

  handleCommentCreate = (data) => {
    const { commentList } = this.state;

    this.setState({
      commentList: commentList.concat([this.state.commentValue]),
      commentValue: "",
    });
  };

  handleCommentInfo = (e) => {
    this.setState({ commentValue: e.target.value });
  };

  render() {
    return (
      <>
        <nav className="Main">
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

        <main className="main__content">
          <section className="section__group">
            <div className="westagram__group__box">
              <ul className="westagram__story__box">
                <li>
                  <img
                    src="../images/KiyeolKim/westagram--profile.jpg"
                    alt="westagram--profile"
                  />
                  <p>smile01</p>
                </li>
                <li>
                  <img
                    src="../images/KiyeolKim/westagram--profile.jpg"
                    alt="westagram--profile"
                  />
                  <p>smile02</p>
                </li>
                <li>
                  <img
                    src="../images/KiyeolKim/westagram--profile.jpg"
                    alt="westagram--profile"
                  />
                  <p>smile03</p>
                </li>
                <li>
                  <img
                    src="../images/KiyeolKim/westagram--profile.jpg"
                    alt="westagram--profile"
                  />
                  <p>smile04</p>
                </li>
                <li>
                  <img
                    src="../images/KiyeolKim/westagram--profile.jpg"
                    alt="westagram--profile"
                  />
                  <p>smile05</p>
                </li>
              </ul>
              <article className="westagram__feed__box">
                <div className="westagram__feed__header">
                  <img
                    src="../images/KiyeolKim/myprofile.jpg"
                    alt="my--profile"
                  />
                  <div className="feed__name__box">
                    <a href="#!">ky_day</a>
                    <i className="fas fa-ellipsis-h"></i>
                  </div>
                </div>
                <div className="westagram__feed__photo">
                  <img
                    src="../images/KiyeolKim/happynewyear.jpg"
                    alt="2021jpg"
                  />
                </div>
                <div className="westagram__feed__status">
                  <svg
                    aria-label="love"
                    className="_8-yf5 loves"
                    fill="#!262626"
                    height="24"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                    <path
                      d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"
                      className="mylike"
                      fill="#!ed4956"
                    ></path>
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    fill="#!262626"
                    viewBox="0 0 48 48"
                  >
                    <path
                      clipRule="evenodd"
                      d="M47.5 46.1l-2.8-11c1.8-3.32.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    aria-label="게시물 공유"
                    className="_8-yf5 "
                    fill="#!262626"
                    height="24"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                  </svg>
                </div>
                <div className="westagram__feed__love"></div>
                <div className="westagram__feed__info">
                  <p>ky_day</p>
                  <span>...</span>
                  <button>더 보기</button>
                </div>
                <CommentList commentList={this.state.commentList} />
                <div className="westagram__feed__comment">
                  <input
                    type="text"
                    placeholder="댓글 달기..."
                    value={this.state.commentValue}
                    onChange={this.handleCommentInfo}
                    className="feed__comment__input"
                  />
                  <button
                    className="feed__comment__Btn"
                    onClick={this.handleCommentCreate}
                    disabled={!this.state.commentValue}
                  >
                    게시
                  </button>
                </div>
              </article>
            </div>

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
              <RecommendList />
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

export default Main;
