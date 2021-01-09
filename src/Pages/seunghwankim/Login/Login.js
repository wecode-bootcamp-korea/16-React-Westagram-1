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
            hiddenPw: true
        };
    }

    handleLoginInfo = (e) => {
        const { id, value } = e.target;
        this.setState({
            [id]: value
        })
    }

    validLoginInfo = () => {
        return (this.state.id.includes('@')) && (this.state.pw.trim().length >= 5) ? true : false
    }

    showLoginInfo = () => {
        console.log(`{id: ${this.state.id} pw: ${this.state.pw}}`);
        fetch(SINGIN_API, {
            method: 'POST',
            body: JSON.stringify({
                email: this.state.id,
                password: this.state.pw
            })
        })
            .then(response => response.json())
            .then(result => { 
                console.log({ result });
                localStorage.setItem('token', result.Authorization); 
            })
    }

    loginByEnterKey = (e) => {
        if (e.key === 'Enter' && this.validLoginInfo()) {
            document.getElementsByTagName('a')[0].click();
        }
    }

    showPassword = () => {
        this.setState({ hiddenPw: !this.state.hiddenPw })
    }

    render() {
        return (
            <div className="Login">
                <div className="login_box">
                    <div className="logo">
                        <h1>Westagram</h1>
                    </div>
                    <div className="input_container">
                        <input id="id" onChange={this.handleLoginInfo} onKeyDown={this.loginByEnterKey} value={this.state.id} type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
                        <div className="pw_container">
                            <input id="pw" onChange={this.handleLoginInfo} onKeyDown={this.loginByEnterKey} value={this.state.pw} type={this.state.hiddenPw ? "password" : "text"} placeholder="비밀번호" />
                            <span className="showPw" onClick={this.showPassword}>{this.state.hiddenPw ? "show" : "hide"}</span>
                        </div>
                        <Link className={this.validLoginInfo() ? "" : "disable"} to={this.validLoginInfo() ? "/main-seunghwan" : "/login-seunghwan"} onClick={this.validLoginInfo() ? this.showLoginInfo : undefined}>로그인</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;