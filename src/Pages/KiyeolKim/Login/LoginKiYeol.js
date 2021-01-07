import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { SIGNUP_API, SIGNIN_API } from "../../../config";
import "../../../styles/common.scss";
import "./Login.scss";

class LoginKiYeol extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
    };
  }

  handleLoginInfo = (e) => {
    const { id, value } = e.target;

    this.setState({ [id]: value }, () => {
      console.log(`ID: ${this.state.id},  PW: ${this.state.pw}`);
    });
  };

  handleValidation = (e) => {
    e.preventDefault();
    const { id, pw } = this.state;

    fetch(SIGNIN_API, {
      method: "POST",
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "SUCCESS") {
          localStorage.setItem("token", res.Authorization);
          this.props.history.push("/main-kiyeol");
        } else if (res.message === "UNAUTHORIZED") {
          alert("아이디나 비밀번호를 확인해주세요.");
        }
      });
  };

  render() {
    const isVaildBtn = this.state.id.includes("@") && this.state.pw.length >= 5;

    const { id, pw } = this.state;

    const contentInfoArr = [
      "소개",
      "블로그",
      "채용 정보",
      "도움말",
      "API",
      "개인정보처리방침",
      "약관",
      "인기 계정",
      "해시태그",
      "위치",
    ];
    const contentInfoArr__02 = [
      "뷰티",
      "댄스 및 공연",
      "피트니스",
      "식음료",
      "집 및 정원",
      "음악",
      "시각 예술",
    ];

    return (
      // main container
      <>
        <main className="LoginKiYeol">
          {/* content group */}
          <article className="westagram__content">
            <img src="../images/KiyeolKim/home-phones.png" alt="home__phones" />
            <img
              src="https://pbs.twimg.com/profile_images/1109389733912666112/XX55fTPf.jpg"
              alt="wecode--img"
            />

            {/* <!-- form box group --> */}
            <div className="westagram__form__box__group">
              {/* form box - 1 */}
              <div className="westagram__form__box">
                <h1 className="westagram__title">Westagram</h1>

                <form action="">
                  <ul className="westagram__input__group">
                    <li>
                      <input
                        id="id"
                        type="text"
                        className="input--text"
                        placeholder="전화번호, 사용자 이름 또는 이메일"
                        value={id}
                        onChange={this.handleLoginInfo}
                      />
                    </li>
                    <li>
                      <input
                        id="pw"
                        type="password"
                        className="input--password"
                        placeholder="비밀번호"
                        value={pw}
                        onChange={this.handleLoginInfo}
                      />
                    </li>
                    <li>
                      <button
                        type="submit"
                        disabled={!isVaildBtn}
                        className={isVaildBtn ? "active" : ""}
                        onClick={this.handleValidation}
                      >
                        <p>로그인</p>
                      </button>
                    </li>
                  </ul>
                </form>

                <div className="westagram__hr__container">
                  <span className="westagram__hr"></span>
                  <div className="westagram__hr__content">또는</div>
                  <span className="westagram__hr"></span>
                </div>

                <div className="westagram__facebook__login__pwlose">
                  <img
                    src="../images/KiyeolKim/facebookimg.png"
                    alt="facebook__img"
                  />
                  <a href="#facebook">Facebook으로 로그인</a>
                  <a href="#lose">비밀번호를 잊으셨나요?</a>
                </div>
              </div>

              {/* <!-- form box - 2 --> */}
              <div className="westagram__form__box__SignUp">
                <p>계정이 없으신가요?</p>
                <a href="#!">가입하기</a>
              </div>

              {/* <!-- appdownload info --> */}
              <div className="westagram__downloadinfo">
                <p>앱을 다운로드하세요.</p>
                <span className="applogo__group">
                  <a href="#!">
                    <img
                      src="../images/KiyeolKim/appstore.png"
                      alt="appstore"
                    />
                  </a>
                  <a href="#!">
                    <img
                      src="../images/KiyeolKim/googleplay.png"
                      alt="googleplay"
                    />
                  </a>
                </span>
              </div>
            </div>
          </article>
        </main>

        {/* foter content info */}
        <footer className="westagram__contentinfo">
          <ul>
            {contentInfoArr.map((list, index) => {
              return <li key={index}>{list}</li>;
            })}
          </ul>
          <ul>
            {contentInfoArr__02.map((list, index) => {
              return <li key={index}>{list}</li>;
            })}
          </ul>
          <div className="westagram__language__group">
            <select className="westagram__language">
              <option value="ko">한국어</option>
              <option value="en">English</option>
            </select>
            <span>© 2020 Instagram from facebook</span>
          </div>
        </footer>
      </>
    );
  }
}

export default withRouter(LoginKiYeol);
