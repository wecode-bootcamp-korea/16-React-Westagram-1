import React, { Component } from 'react';

class Aside extends Component {
  render() {
    return (
      <aside className="main-right">
      <div className="wecode-container">
        <img alt="wecode-logo" src="./images/taehyungkim/wecode.png" />
        <div className="wecode-content">
          <strong>wecode_bootcamp</strong>
          <p>Wecode | 위코드</p>
        </div>
      </div>
      <div className="story-container">
        <div className="story-title">
          <p>스토리</p>
          <span>모두 보기</span>
        </div>
        <div className="story-contents">
          <div className="story" key="story0">
            <img alt="story-img" src="./images/taehyungkim/정연.png" />
            <div>
              <strong>jeongyeon_love</strong>
              <p>16분 전</p>
            </div>
          </div>
          <div className="story" key="story1">
            <img alt="story-img" src="./images/taehyungkim/사나.png" />
            <div>
              <strong>sana_no_mossana</strong>
              <p>42분 전</p>
            </div>
          </div>
          <div className="story" key="story2">
            <img alt="story-img" src="./images/taehyungkim/쯔위.png" />
            <div>
              <strong>arrow_goddess</strong>
              <p>2시간 전</p>
            </div>
          </div>
          <div className="story" key="story3">
            <img alt="story-img" src="./images/taehyungkim/나연.png" />
            <div>
              <strong>bunnybunny_nayeon</strong>
              <p>4시간 전</p>
            </div>
          </div>
        </div>
      </div>
      <div className="recommend-container">
        <div className="recommend-title">
          <p>회원님을 위한 추천</p>
          <span>모두 보기</span>
        </div>
        <div className="recommend-contents">
          <div className="recommend" key="recommend0">
            <div className="recommend-left">
              <img alt="recommend-img" src="./images/taehyungkim/다현.png" />
              <div className="recommend-text">
                <strong>tohu_dahyun</strong>
                <p>jeongyeon_love 외 12명이</p>
              </div>
            </div>
            <button>팔로우</button>
          </div>
          <div className="recommend" key="recommend1">
            <div className="recommend-left">
              <img alt="recommend-img" src="./images/taehyungkim/모모.png" />
              <div className="recommend-text">
                <strong>momo_is_chulbuzi</strong>
                <p>jeongyeon_love 외 12명이</p>
              </div>
            </div>
            <button>팔로우</button>
          </div>
          <div className="recommend">
            <div className="recommend-left" key="recommend2">
              <img alt="recommend-img" src="./images/taehyungkim/지효.png" />
              <div className="recommend-text">
                <strong>jihyo_dieter</strong>
                <p>jeongyeon_love 외 12명이</p>
              </div>
            </div>
            <button>팔로우</button>
          </div>
        </div>
      </div>
      <div className="right-container">
        <p className="right-text">
          Instragram 정보 • 지원 • 홍보 센터 • API • <br />
          채용 정보 • 개인정보처리방침 • 약관 • <br />
          디렉터리 • 프로필 • 해시태그 • 언어
        </p>
        <br />
        @ 2019 Instagram
      </div>
    </aside>
    )
  }
}

export default Aside;