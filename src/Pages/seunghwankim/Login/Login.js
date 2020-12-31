import './Login.scss';
// import '../../reset.scss';
import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            id: '',
            pw: '',
            hiddenPw: true,
            btnDisabled: true
        };
    }

    handleLoginInfo = (e) => {
        const { id, value } = e.target;
        this.setState({
            [id]: value
        })
    }

    showLoginInfo = (e) => {
        console.log(`{id: ${this.state.id} pw: ${this.state.pw}}`)
    }

    showPassword = () => {
        this.setState({ hiddenPw:!this.state.hiddenPw })
    }

    render() {
        return (
            <div className="Login">
                <div className="login_box">
                    <div className="logo">
                        <h1>Westagram</h1>
                    </div>
                    <div className="input_container">
                        <input id="id" onChange={this.handleLoginInfo} value={this.state.id} type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
                        <div className="pw_container">
                            <input id="pw" onChange={this.handleLoginInfo} value={this.state.pw} type={this.state.hiddenPw ? "password" : "text"} placeholder="비밀번호" />
                            <span className="showPw" onClick={this.showPassword}>{this.state.hiddenPw ? "show" : "hide"}</span>
                        </div>
                        <button id="loginBtn" onClick={this.showLoginInfo} disabled={(this.state.id.trim().includes('@')) && (this.state.pw.trim().length >= 5) ? false : true}><Link to="/main-seunghwan">로그인</Link></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;