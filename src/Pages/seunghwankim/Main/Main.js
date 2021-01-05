import React from 'react';
import Comment from './Components/Comment'
import COMMENT from './data'
import './Main.scss';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            commentInputValue: '',
            commentList: []
        }
    }

    componentDidMount() {
        this.setState({
            commentList: COMMENT
        })
    }

    handleCommentInput = (e) => {
        this.setState({
            commentInputValue: e.target.value
        })
    }

    handleCommentEnrollBtn = () => {
        const { commentInputValue, commentList } = this.state;
        this.setState({
            commentList: [...commentList, {
                id: commentList.length + 1,
                content: commentInputValue
            }],
            commentInputValue: ''
        })
    }

    commentValid = () => {
        return this.state.commentInputValue.trim() === ''
    }

    commentEnrollByEnterKey = (e) => {
        if ((e.key === 'Enter') && (!this.commentValid())) {
            this.handleCommentEnrollBtn();
        }
    }

    render() {
        return (
            <div className="Main">
                <nav>
                    <div className="nav_content">
                        <div className="logo">Westagram</div>
                        <div className="search">
                            <input type="text" />
                        </div>
                        <div className="menu">
                            <div className="icon_container">
                                <div>
                                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                                        alt="explore" />
                                </div>
                                <div>
                                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                                        alt="heart" />
                                </div>
                                <div>
                                    <img src="https://scontent-xsp1-2.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-xsp1-2.cdninstagram.com&_nc_ohc=FbyWMPXOjYgAX8RM9LH&oh=06e5342744e5ff4803fd3bb789f6ecfd&oe=600CD80F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
                                        alt="my profile" />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="nav_fixed_guard"></div>
                <main>
                    <div className="main_content_container">
                        <section>
                            <div className="story">
                                <div className="story_block">
                                    <div className="story_img">
                                        <img src="https://scontent-xsp1-2.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-xsp1-2.cdninstagram.com&_nc_ohc=FbyWMPXOjYgAX8RM9LH&oh=06e5342744e5ff4803fd3bb789f6ecfd&oe=600CD80F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2" alt="story img" />
                                    </div>
                                    <div className="story_name">member1</div>
                                </div>
                            </div>
                            <article>
                                <header>
                                    <div className="header_img">
                                        <img src="https://scontent-xsp1-2.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-xsp1-2.cdninstagram.com&_nc_ohc=FbyWMPXOjYgAX8RM9LH&oh=06e5342744e5ff4803fd3bb789f6ecfd&oe=600CD80F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2" alt="header img" />
                                    </div>
                                    <div className="header_name">1k3h_sh</div>
                                </header>
                                <div className="post_img">
                                    <img src='../images/seunghwankim/KakaoTalk_20201224_203347451.jpg' alt="참DOM" />
                                </div>
                                <div className="content_info_container">
                                    <div className="icon_container">
                                        <div>
                                            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="heart" />
                                        </div>
                                    </div>
                                    <div className="likes">좋아요 개수</div>
                                    <div className="desc">
                                        <span>1k3h_sh</span>
                                        <span>이건 참DOM</span>
                                    </div>
                                    <div className="see_all_comments">댓글 모두 보기</div>
                                    <div className="comments_container">
                                        {this.state.commentList.map((comment) => {
                                            return <Comment key={comment.id} content={comment.content} />
                                        })}
                                    </div>
                                    <div className="day">2020-07-30</div>
                                    <div className="comment_input_box">
                                        <input id="commentInput" onChange={this.handleCommentInput} onKeyDown={this.commentEnrollByEnterKey} value={this.state.commentInputValue} placeholder="댓글 달기..." />
                                        <div className="enroll_btn_block">
                                            <button id="commentEnrollBtn" onClick={this.handleCommentEnrollBtn} disabled={this.commentValid()}>게시</button>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </section>
                        <aside>
                            <div className="my_profile">
                                <div className="profile_img">
                                    <img src="https://scontent-ort2-2.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_ohc=FbyWMPXOjYgAX_hZ25G&oh=3e9c84895822d1bfb2ef77cdeeae0acf&oe=600CD80F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
                                        alt="profile_img" />
                                </div>
                                <div className="profile_info">
                                    <div className="my_id">1k3h_sh</div>
                                    <div className="my_name">김승환</div>
                                </div>
                                <div className="change_btn_block">
                                    <button className="change_btn">전환</button>
                                </div>
                            </div>
                            <div className="recommend_box">
                                <div className="recommend">회원님을 위한 추천</div>
                                <div className="recommend_list">
                                    <div className="member_block">
                                        <div className="member_img">
                                            <img src="https://scontent-ort2-2.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_ohc=FbyWMPXOjYgAX_hZ25G&oh=3e9c84895822d1bfb2ef77cdeeae0acf&oe=600CD80F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
                                                alt="profile_img" />
                                        </div>
                                        <div className="member_info">
                                            <div className="member_id">member1</div>
                                            <div>회원님을 위한 추천</div>
                                        </div>
                                        <div className="follow_btn_block">
                                            <button className="follow_btn">팔로우</button>
                                        </div>
                                    </div>
                                    <div className="member_block">
                                        <div className="member_img">
                                            <img src="https://scontent-ort2-2.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_ohc=FbyWMPXOjYgAX_hZ25G&oh=3e9c84895822d1bfb2ef77cdeeae0acf&oe=600CD80F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
                                                alt="profile_img" />
                                        </div>
                                        <div className="member_info">
                                            <div className="member_id">member2</div>
                                            <div>회원님을 위한 추천</div>
                                        </div>
                                        <div className="follow_btn_block">
                                            <button className="follow_btn">팔로우</button>
                                        </div>
                                    </div>
                                    <div className="member_block">
                                        <div className="member_img">
                                            <img src="https://scontent-ort2-2.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_ohc=FbyWMPXOjYgAX_hZ25G&oh=3e9c84895822d1bfb2ef77cdeeae0acf&oe=600CD80F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
                                                alt="profile_img" />
                                        </div>
                                        <div className="member_info">
                                            <div className="member_id">member3</div>
                                            <div>회원님을 위한 추천</div>
                                        </div>
                                        <div className="follow_btn_block">
                                            <button className="follow_btn">팔로우</button>
                                        </div>
                                    </div>
                                    <div className="member_block">
                                        <div className="member_img">
                                            <img src="https://scontent-ort2-2.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_ohc=FbyWMPXOjYgAX_hZ25G&oh=3e9c84895822d1bfb2ef77cdeeae0acf&oe=600CD80F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
                                                alt="profile_img" />
                                        </div>
                                        <div className="member_info">
                                            <div className="member_id">member4</div>
                                            <div>회원님을 위한 추천</div>
                                        </div>
                                        <div className="follow_btn_block">
                                            <button className="follow_btn">팔로우</button>
                                        </div>
                                    </div>
                                    <div className="member_block">
                                        <div className="member_img">
                                            <img src="https://scontent-ort2-2.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_ohc=FbyWMPXOjYgAX_hZ25G&oh=3e9c84895822d1bfb2ef77cdeeae0acf&oe=600CD80F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
                                                alt="profile_img" />
                                        </div>
                                        <div className="member_info">
                                            <div className="member_id">member5</div>
                                            <div>회원님을 위한 추천</div>
                                        </div>
                                        <div className="follow_btn_block">
                                            <button className="follow_btn">팔로우</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <footer>
                                <div className="footer_menu">
                                    <ul>
                                        <li>소개</li>
                                        <li>도움말</li>
                                        <li>홍보 센터</li>
                                        <li>API</li>
                                        <li>채용 정보</li>
                                        <li>개인정보처리방침</li>
                                        <li>약관</li>
                                        <li>위치</li>
                                        <li>인기 계정</li>
                                        <li>해시태그</li>
                                        <li>언어</li>
                                    </ul>
                                </div>
                                <div className="copyr">&copy; 2020</div>
                            </footer>
                        </aside>
                    </div>
                </main>
            </div>
        );
    }
}

export default Main;