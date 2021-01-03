import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Login.scss';
// import React from 'react';

class LoginDongHa extends React.Component {
    
    constructor() {
        super();
        this.state = {
            id: "",
            password: "",
            hiddenPw: true,
            productList:[],
        };
    }

    // handleIdChange = (e) => {
    //     // e.target.value
    //     this.setState({id : e.target.value});
    // };

    // handlePasswordChange = (e) => {
    //     // e.target.value
    //     this.setState({password : e.target.value});
    // };

    handelLoginInfo = (e) => {
        // e.target.id ==> "id" "password"
        // e.target.id : e.taregt.value 
        const {id, value} = e.target;
        this.setState({ [id] : value});
    };

    checkVaildation = (e) => {
       e.preventDefault();
       const {id, password} = this.state;

       const checkId = id.includes("@"); 
       const checkPw = password.length >= 4;
       
       if (checkId&&checkPw) {
           alert("로그인 성공 !");
           this.props.history.push("/main");
       }

       if(!checkId) {
           alert("아이디는 @를 포함해야 합니다.")
       }

       if(!checkPw) {
           alert("비밀번호는 4자리 이상입니다.")
       }
    };

    showPassword = () => {
        this.setState({ hiddenPw : !this.state.hiddenPw });
    };

    render() {
        
        const activateBtn =
        (this.state.id.length && this.state.password.length) != 0; // --> boolean(true/false)
        
        console.log("id", this.state.id, "pw", this.state.password);
        return (
            <div className="LoginDongHa">
                <article>
                    <div className="container">
                        <div className="box">
                            <h1>Westargram</h1>
                            <div>
                                <form>
                                    <input 
                                    type="text" 
                                    id="id" 
                                    placeholder="전화번호, 사용자 이름 또는 이메일" 
                                    value={this.state.id} 
                                    onChange={this.handelLoginInfo}
                                    />
                                    <div className="pwCon">
                                    <input 
                                    type={this.state.hiddenPw ? "password" : "text"} 
                                    id="password" 
                                    placeholder="비밀번호" 
                                    value={this.state.password} 
                                    onChange={this.handelLoginInfo}
                                    />
                                    <span className="showPw" 
                                    onClick={this.showPassword}>
                                        {this.state.hiddenPw ? "Show" : "Hide"}</span>
                                    </div>
                                    <button className="loginBtn" 
                                    onClick={this.checkVaildation} 
                                    onKeyUp={this.checkVaildation}
                                    // style={{backgroundColor : activateBtn ? "#055cb1" : "#c0dffd"}}
                                    className={activateBtn ? "active" : ""}
                                    >
                                        로그인</button>
                                    
                                    <div className="and">
                                        <div className="meanlessLine"></div>
                                        <div className="pointLine">또는</div>
                                        <div className="meanlessLine"></div>
                                    </div>
                                    <button className="faceBtn">
                                        <a
                                            href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%2522d0vlbs1kbckv2ffxxyp9xsmjvy7r8rz15aqhp61xebr9i6aspjl%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26locale%3Dko_KR%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D257d895d-019d-4984-ad55-4feb957649d6%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%2522d0vlbs1kbckv2ffxxyp9xsmjvy7r8rz15aqhp61xebr9i6aspjl%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%23_%3D_&display=page&locale=ko_KR&pl_dbl=0"><img
                                                alt="facebook" src="https://www.facebook.com/images/fb_icon_325x325.png"
                                                width="16px" height="16px" /></a>
                                        <span className="fbLog">Facebook으로 로그인</span>
                                    </button>
                                    <a className="forgotPassword" href="https://www.instagram.com/accounts/password/reset/"
                                        tabIndex="0">비밀번호를 잊으셨나요?</a>
                                </form>
                            </div>
                        </div>
                        <div className="join">
                            <span>계정이 없으신가요?</span> <a class="makeId"
                            href="https://www.instagram.com/accounts/emailsignup/">가입하기</a>
                        </div>

                        <div className="app">
                            <p className="appDw">앱을 다운로드 하세요.</p>
                            <div className="introApp">
                                <a href="https://apps.apple.com/app/instagram/id389801252?vt=lo" target="_blank"><img
                                    alt="App Store"
                                    src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png"
                                    width="136px" height="40px" /></a>
                                <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DFDA50484-5680-4093-90D6-76616DB66EC7%26utm_content%3Dlo%26utm_medium%3Dbadge"
                                    target="_blank"><img alt="Google Play"
                                    src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"
                                    width="136px" height="40px" /></a>
                            </div>
                        </div>
                    </div>
                </article>

                <footer>
                    <div className="banner">
                        <div className="addver">
                            <div className="firstLine">
                                <div>소개</div>
                                <div>블로그</div>
                                <div>채용 정보</div>
                                <div>도움말</div>
                                <div>API</div>
                                <div>개인정보처리방침</div>
                                <div>약관</div>
                                <div>인기 계정</div>
                                <div>해시태그</div>
                                <div>위치</div>
                            </div>

                            <div className="secondLine">
                                <div>소개</div>
                                <div>뷰티</div>
                                <div>댄스 및 공연</div>
                                <div>피트니스</div>
                                <div>식음료</div>
                                <div>집 및 정원</div>
                                <div>음악</div>
                                <div>시각 예술</div>
                            </div>
                        </div>

                        <div className="lan">
                            <div className="selectLan">
                                <select>
                                    <option value="kor">한국어</option>
                                    <option value="eng">english</option>
                                    <option value="jap">日本語</option>
                                </select>

                                <span>
                                © 2020 Instagram from Facebook
                                </span>
                            </div>
                        </div>
                    </div>
                </footer>   
            </div>
        );
    }
};

export default withRouter(LoginDongHa);