import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { SIGNUP_API, SIGNIN_API } from '../data/config'
import './Login.scss'


class LoginTaeHyung extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idValue : '',
      pwValue : '',
      isPwShown : false,
      token: '',
    }
  }

  handleInput = (e) => {
    const { name, value } = e.target;   // 비구조화(destructuring)
    this.setState({ [name]: value })
  }

  handleClick = () => {
    const { isPwShown } = this.state;
    this.setState({ isPwShown: !isPwShown })
  }

  checkToken = () => {
    const token = localStorage.getItem('token');
    console.log({ token })
  }

  checkValidation = (e) => {
    e.preventDefault();
    const { idValue, pwValue } = this.state;
    const checkResult = (idValue.includes('@') && pwValue.length >= 8);
    if (!checkResult) {
      alert('올바르지 않은 이메일, 비밀번호 입니다.')
      return;
    }
    fetch(SIGNIN_API, {
      method: "POST",
      body: JSON.stringify({
        email: idValue,
        password: pwValue,
      })
    })
      .then((response) => response.json())
      .then((result) => {
        console.log({ result });
        localStorage.setItem("token", result.Authorization);
        this.setState({
          token: result.Authorization
        })
      })
  }

  render() {
    const { idValue, pwValue, isPwShown, token } = this.state;
    const { handleInput, handleClick, checkValidation, checkToken } = this;
    const regex = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    const activeBtn = (idValue.length && pwValue.length) !== 0;
    
    return (
      <div className="Login"> 
        <h2>{token ? '마이 페이지' : '로그인/회원가입'}</h2>
        <main className="login-container">
          <h1>instargram</h1>
          <form onSubmit={checkValidation}>
            <input 
              type="text"
              name='idValue'
              value={idValue}
              onChange={(e) => handleInput(e)}
              placeholder="전화번호, 사용자 이름 또는 이메일" />
            <p className={idValue && idValue.length < 6 && 'active'}>아이디는 최소 6글자 이상의 이메일 형식!</p>
            <div className="input-pw-container">
              <input 
                type={isPwShown ? "text" : "password"}
                name='pwValue'
                value={pwValue}
                onChange={(e) => handleInput(e)}
                placeholder="비밀번호" />
              <span className="show-pw-btn" onClick={handleClick}>
                {isPwShown ? 'Hide' : 'Show'}
              </span>
              <p className={pwValue && !regex.test(pwValue) && 'active'}>
                비밀번호는 8~15자의 영문(대소)/숫자/특수문자 혼합!
              </p>              
            </div>
            <button type="submit" className={`${activeBtn ? 'active' : ''}`}>
                로그인
            </button>
            <button type="button" onClick={checkToken}>토큰확인</button>
          </form>
          <p className="find-pw"><a href="/password-finder">비밀번호를 잊으셨나요?</a></p>
        </main>
      </div>
    )
  }
}

export default withRouter(LoginTaeHyung);