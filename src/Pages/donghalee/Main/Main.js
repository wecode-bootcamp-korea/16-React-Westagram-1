import React, { Component } from 'react';
import './Main.scss'

class MainDongHa extends Component {
    render() {
        return (
            <div className="MainDongHa">

                <nav>
                    <div className="navi">
                        <div className="navLog">
                            <span>Westargram</span>
                        </div>

                        <div className="navSer">
                            <input type="text" placeholder="검색" />
                            <img alt="검색" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png" className="magnifyingGlass
                        " />
                        </div>

                        <div className="navEmo">
                            <div className='emo'>
                                <img alt="우측 메뉴 탐색" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                                    width="25px" className="rigthMenu" />
                                <img alt="하트" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                                    width="25px" className="heart" />
                                <img alt="마이페이지" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                                    width="25px" className="myPage" />
                            </div>
                        </div>
                    </div>
                </nav>

                <main>
                    <div className="feeds">
                        <article>
                            <header>
                                <div className="profileImg">
                                    <img className="proImg" alt="프로필 이미지"
                                        src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/58409785_2204806042920901_6100048501826125824_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=SPyNhXRgfSYAX9g4RKY&tp=1&oh=43b12a9deaf3666330dbbb9117e3539e&oe=60127BE3" />
                                </div>

                                <div className="profileName">
                                    <div className="nameFir">
                                        <span>kevin</span>
                                    </div>

                                    <div className="nameSec">
                                        <span>대한민국 그 어딘가에서</span>
                                    </div>
                                </div>
                            </header>

                            <div className="articleImg">
                                <img alt="kevin 게시물"
                                    src="https://lh3.googleusercontent.com/proxy/Z_IMGssX6xIF5XHEkMpXBmKPuE8pNz1rvcI-up_VnFv8uaTSAo3sYW7Qqd8s0ZoQ-HKYGFQWfTtu7-J1ITHBgWfXX-k3xJmkF-tSI2-TEx8iziCVqkWO6KgRACU6NTlEOVMme4nl8yOijc_unNxeto-jCo-OWTxdNfRDQkmi" />
                            </div>

                            <div className="commentEmo">
                                <section>
                                    <img alt="좋아요" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
                                </section>
                            </div>

                            <div className="whoLike">
                                <div className="likeImg">
                                    <img className="proImg" alt="프로필 이미지"
                                        src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/58409785_2204806042920901_6100048501826125824_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=SPyNhXRgfSYAX9g4RKY&tp=1&oh=43b12a9deaf3666330dbbb9117e3539e&oe=60127BE3" />
                                </div>

                                <div>
                                    <span><span className="likePeople">kevin</span>님 <span className="likePeople">외 10명</span>이
                                좋아합니다.</span>
                                </div>
                            </div>

                            <div className="comment">
                                <div className="mainComment">
                                    <span className="point">kevin</span>
                                    <span>영원히 어피치</span>
                                </div>

                                <div className="allComment">
                                    <span className="allPoint">댓글 1개 몸두 보기</span>
                                </div>

                                <div className="preComment">
                                    <span className="point">lovely_apeach</span>
                                    <span>어피치가 짱이지 !</span>
                                    <img alt="좋아요" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                                        width="15px" height="15px" />
                                </div>

                                <div className="commentDay">
                                    <span className="dayPoint">1일 전</span>
                                </div>
                            </div>

                            <div className="getComment">
                                <input className="newComment" type="text" value="" placeholder="댓글 달기..." />
                                <button className="uploadBtn">게시</button>
                            </div>
                        </article>
                    </div>

                    <div className="right">
                        <div className="inforUser">
                            <div className="userIntro">
                                <div className="userImg">
                                    <img className="mainUser" alt="프로필 이미지"
                                        src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/58409785_2204806042920901_6100048501826125824_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=SPyNhXRgfSYAX9g4RKY&tp=1&oh=43b12a9deaf3666330dbbb9117e3539e&oe=60127BE3" />
                                </div>

                                <div className="userleName">
                                    <div className="userFir">
                                        <span>kevin_photo_studio</span>
                                    </div>

                                    <div className="userSec">
                                        <span>kevin</span>
                                    </div>
                                </div>
                            </div>

                            <div className="trans">
                                <div>
                                    <span>전환</span>
                                </div>
                            </div>
                        </div>

                        <div className="story">
                            <div className="storyEx">
                                <span className="storySto">스토리</span>
                                <span>모두 보기</span>
                            </div>

                            <div className="storyList">
                                <div className="storyImg">
                                    <img className="storyUser" alt="프로필 이미지"
                                        src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/58409785_2204806042920901_6100048501826125824_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=SPyNhXRgfSYAX9g4RKY&tp=1&oh=43b12a9deaf3666330dbbb9117e3539e&oe=60127BE3" />
                                </div>

                                <div className="userleName">
                                    <div className="userFir">
                                        <span>kevin</span>
                                    </div>

                                    <div className="userSec">
                                        <span>1시간 전</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="recommend">
                            <div className="recommendForYou">
                                <span className="recommendSto">회원님을 위한 추천</span>
                                <span>모두 보기</span>
                            </div>

                            <div className="recommendList">
                                <div className="listLeft">
                                    <div className="recommendPeople">
                                        <img className="recommendImg" alt="추천 사람"
                                            src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/58409785_2204806042920901_6100048501826125824_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=SPyNhXRgfSYAX9g4RKY&tp=1&oh=43b12a9deaf3666330dbbb9117e3539e&oe=60127BE3" />
                                    </div>

                                    <div className="recommendName">
                                        <div className="recommendNameOne">
                                            <span>kevin</span>
                                        </div>

                                        <div className="recommendNameTwo">
                                            <span>Follows you</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="trans">
                                    <span>팔로우</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

            </div>  
        );
    }
};


export default MainDongHa;            