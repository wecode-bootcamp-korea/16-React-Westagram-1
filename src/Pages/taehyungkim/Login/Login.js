import React, { Component } from 'react';
import './Login.scss'
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class LoginTaeHyung extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idValue : '',
      pwValue : '',
      showPw : false
    }
  }

  handleInput = (e) => {
    const { name, value } = e.target;   // 비구조화(destructuring)
    this.setState({ [name]: value })
  }

  handleClick = () => {
    this.setState({ showPw: !this.state.showPw })
  }

  checkValidation = (e) => {
    e.preventDefault();
    const { idValue, pwValue } = this.state;
    const checkResult = (idValue.includes('@') && pwValue.length >= 4);
    if (checkResult) {
      alert('메인 페이지로 이동합니다.')
      this.props.history.push('/main-taehyung') 
    }
    else {
      alert('아이디, 비밀번호가 올바르지 않습니다.')
      this.props.history.push('/login-taehyung');
      this.setState({
        idValue: '',
        pwValue: '',
      })
    }
  }

  render() {
    const activeBtn = (this.state.idValue.length && this.state.pwValue.length) !== 0;

    return (
      <div className="Login">    
        <main className="login-container">
          <h1>instargram</h1>
          <form onSubmit={this.checkValidation}>
            <input 
              type="text"
              name='idValue'
              value={this.state.idValue}
              onChange={(e) => this.handleInput(e)}
              placeholder="전화번호, 사용자 이름 또는 이메일" />
            <p>아이디는 최소 6글자 이상!</p>
            <input 
              type={this.state.showPw ? "text" : "password"}
              name='pwValue'
              value={this.state.pwValue}
              onChange={(e) => this.handleInput(e)}
              placeholder="비밀번호" />
            <span className="show-pwd-btn" onClick={this.handleClick}>
              {!this.state.showPw ? 'Show' : 'Hide'}
            </span>
            <p>비밀번호는 8~15자의 영문(대소)/숫자/특수문자 혼합!</p>
            <button type="submit" className={`${activeBtn ? 'active' : ''}`} onClick={this.goToMain}>
              {/* <Link to="/main"> */}
                로그인
              {/* </Link> */}
            </button>
          </form>
          <p className="find-pwd"><a href="/password-finder.html">비밀번호를 잊으셨나요?</a></p>
        </main>
      </div>
    )
  }
}

export default withRouter(LoginTaeHyung);