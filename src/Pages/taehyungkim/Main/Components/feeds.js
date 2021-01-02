import React, { Component } from 'react';
import { feedHeadSVG, btnConSVG } from '../../data/config'
import Comment from './comment'

class Feeds extends Component {
  render() {
    const { feedData, updateComment, addComment, toggleCommentLike, inputVal, commentList } = this.props;
    let cmtBtnActive = (!inputVal);

    return (
      <div className="feeds">
        <article className="feed">
          <header className="feed-header">
            <div>
              <img alt="feed-profile-img" src="./images/taehyungkim/prof.jpeg" className="feed-profile-img" />
              <strong className="feed-profile-name">canon-mj</strong>
            </div>
            <button>
              {feedHeadSVG}
            </button>
          </header>
          <img alt="feed-main-img" src="./images/taehyungkim/prague.jpeg" className="feed-main-img" />
          <footer>
            <div className="btn-container">
              <div className="btn-container-left">
                <button className="btn-container-like" key="btn-container-like" onClick={(e) => e.target.parentNode.classList.toggle('like')}>
                  {btnConSVG[0]}
                </button>
                <button className="btn-container-comment" key="btn-container-comment">
                  {btnConSVG[1]}
                </button>
                <button className="btn-container-share" key="btn-container-share"> 
                  {btnConSVG[2]}
                </button>
              </div>
              <div className="btn-container-right">
                <button className="btn-container-bookmark">
                  {btnConSVG[3]}
                </button>
              </div>
            </div>
            <p className="like-counter">
              <img alt="like-first-img" src={'./images/taehyungkim/' + feedData[0].like[0][0]} className="like-first-img" />
              <strong className="like-name">{feedData[0].like[0][1]}</strong>님 <strong className="like-count">외 {feedData[0].like.length}명</strong>이 좋아합니다.
            </p>
            <div className="comment-container">
              <div className="my-comment">
                <strong className="my-comment-name">canon-mj</strong>
                <span className="my-comment-text">프라하 가고싶다아아아~~ 체코맥주 먹고싶다아아아~~~~</span>
                <span>
                  <span className="my-comment-dots">... </span>
                  <span className="my-comment-more">더 보기</span>
                </span>
              </div>
              <div className="follower-comment-container">
                {commentList.map(comment => 
                  <Comment commentInfo={comment} toggleCommentLike={toggleCommentLike} />
                )}
              </div>
            </div>
            <p className="time-content">42분 전</p>
          </footer>
          <form onSubmit={addComment}>
            <input type="text" placeholder="댓글 달기..." value={inputVal} onChange={(e) => updateComment(e)} />
            <button type="submit" className={!cmtBtnActive && 'active'}>게시</button>
          </form>
        </article>
      </div>
    )
  }
}

export default Feeds;