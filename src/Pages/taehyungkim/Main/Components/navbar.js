import React, { Component } from 'react';
import { navSubSVG } from '../../data/config'

class Navbar extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <section className="nav-container">
          <div className="nav-title">
            <img alt="logo" src="./images/taehyungkim/instagram.png" />
            <div className="nav-title-midbar"></div>
            <p 
              onMouseDown={(e) => {e.target.className = `text-logo focus`}}
              onMouseOut={(e) => {e.target.className = `text-logo`}}>
              <a href="/">Instagram</a>
            </p>
          </div>
          <div className="nav-search" onClick={(e) => document.querySelector('.nav-search').classList.toggle('focus')}>
            <input type="text" placeholder="검색...." />
            <div className="nav-search-placeholder" >
              <i className="fas fa-search"></i><span className="placeholder">검색</span>
            </div>
            <div className="nav-search-end">
              <button type="button"><i className="fas fa-times-circle"></i></button>
            </div>
            <div className="search-id-container">
              <div className="search-id">
                <div className="search-id-left">
                  <strong className="search-id-name">ID!!</strong>
                  <p className="search-id-desc">설명입니다.</p>
                </div>
                <button>팔로우</button>
              </div>
            </div>
          </div>
          <ul className="nav-menus">
            <li className="nav-menu gps" key="gps">
              <img className="nav-menu-icon" alt="nav-menu-explore" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" />
            </li>
            <li className="nav-menu likes new" key="likes">
              <img className="nav-menu-icon" alt="nav-menu-heart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
            </li>
            <li className="nav-menu profile" key="profile" onClick={(e) => document.querySelector('.profile').classList.toggle('show')}>
              <img className="nav-menu-icon" alt="nav-menu-profile" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" />
              <div className="nav-submenu-profile">
                <ul>
                  <li key="프로필">
                    {navSubSVG[0]}
                    <span>프로필</span>
                  </li>
                  <li key="설정">
                    {navSubSVG[1]}
                    <span>설정</span>
                  </li>
                  <li key="저장됨">
                    {navSubSVG[2]}
                    <span>저장됨</span>
                  </li>
                  <li key="계정 전환">
                    {navSubSVG[3]}
                    <span>계정 전환</span>
                  </li>
                  <li>
                    <span>로그아웃</span>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </section>
      </nav>
    )
  }
}

export default Navbar;