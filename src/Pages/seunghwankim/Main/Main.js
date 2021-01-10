import React from 'react';
import Comment from './Components/Comment'
import Member from './Components/Member'
import Footer from './Components/Footer'
import { COMMENT, MEMBER_INFO, FOOTER_INFO } from './data'
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      commentInputValue: '',
      commentList: [],
      memberList: [],
      footerList: []
    }
  }

  componentDidMount() {
    this.setState({
      commentList: COMMENT,
      memberList: MEMBER_INFO,
      footerList: FOOTER_INFO
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
    const { commentInputValue } = this.state;
    return commentInputValue.trim() === ''
  }

  commentEnrollByEnterKey = (e) => {
    const { commentValid, handleCommentEnrollBtn } = this
    if ((e.keyCode === '13') && (!commentValid())) {
      handleCommentEnrollBtn();
    }
  }

  render() {
    const { commentInputValue, commentList, memberList, footerList } = this.state;
    const { handleCommentInput, handleCommentEnrollBtn, commentValid, commentEnrollByEnterKey } = this;
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
                    {commentList.map((comment) => {
                      return <Comment key={comment.id} content={comment.content} />
                    })}
                  </div>
                  <div className="day">2020-07-30</div>
                  <div className="comment_input_box">
                    <input className="commentInput" onChange={handleCommentInput} onKeyDown={commentEnrollByEnterKey} value={commentInputValue} placeholder="댓글 달기..." />
                    <div className="enroll_btn_block">
                      <button className="commentEnrollBtn" onClick={handleCommentEnrollBtn} disabled={commentValid()}>게시</button>
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
                  {memberList.map(member => {
                    return <Member key={member.id} memberName={member.memberName} />
                  })}
                </div>
              </div>
              <footer>
                <div className="footer_menu">
                  <ul>
                    {footerList.map(footer => {
                      return <Footer key={footer.id} title={footer.title} />
                    })}
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