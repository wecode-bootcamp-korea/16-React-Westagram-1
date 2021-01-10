import React from 'react';
import { Link } from 'react-router-dom';
import { SINGIN_API } from './config'
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      isPwHidden: true
    };
  }

  handleLoginInfo = (e) => {
    const { id, value } = e.target;
    this.setState({
      [id]: value
    })
  }

  validLoginInfo = () => {
    const { id, pw } = this.state;
    return (id.includes('@')) && (pw.trim().length >= 5) ? true : false
  }

  showLoginInfo = () => {
    const { id, pw } = this.state;
    fetch(SINGIN_API, {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pw
      })
    })
      .then(response => response.json())
      .then(result => {
        localStorage.setItem('token', result.Authorization);
      })
  }

  loginByEnterKey = (e) => {
    const { validLoginInfo } = this;
    if (e.keyCode === '13' && validLoginInfo()) {
      document.getElementsByTagName('a')[0].click();
    }
  }

  showPassword = () => {
    const { isPwHidden } = this.state;
    this.setState({ isPwHidden: !isPwHidden })
  }

  render() {
    const { id, pw, isPwHidden } = this.state;
    const { handleLoginInfo, validLoginInfo, showLoginInfo, loginByEnterKey, showPassword } = this;
    return (
      <div className="Login">
        <div className="login_box">
          <div className="logo">
            <h1>Westagram</h1>
          </div>
          <div className="input_container">
            <input id="id" onChange={handleLoginInfo} onKeyDown={loginByEnterKey} value={id} type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
            <div className="pw_container">
              <input id="pw" onChange={handleLoginInfo} onKeyDown={loginByEnterKey} value={pw} type={isPwHidden ? "password" : "text"} placeholder="비밀번호" />
              <span className="showPw" onClick={showPassword}>{isPwHidden ? "show" : "hide"}</span>
            </div>
            <Link className={validLoginInfo() ? "" : "disable"} to={validLoginInfo() ? "/main-seunghwan" : "/login-seunghwan"} onClick={validLoginInfo() ? showLoginInfo : undefined}>로그인</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;