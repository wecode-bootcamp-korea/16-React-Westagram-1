import React, { Component } from 'react';
import Comment from './comment';
import { feedHeadSVG, btnConSVG } from '../../data/config';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowMore: false,
      commentList: [],
      commentValue: '',
    }
  }

  componentDidMount() {
    const { follower } = this.props.feedObj;
    this.setState({
      commentList: follower,
    })
  }

  updateComment = (e) => {
    const { value } = e.target;
    this.setState({
      commentValue: value
    })
  }

  addComment = (e) => {
    e.preventDefault();
    const { myData, feedObj, updateList } = this.props;
    const { commentList, commentValue } = this.state;
    const newComment = {id: commentList[commentList.length-1].id + 1, name: myData.name, comment: commentValue, like: false};
    const newList = commentList.concat(newComment);
    this.setState({
      commentList: newList,
      commentValue: '',
    })
    updateList(feedObj.id, commentList)
  }

  toggleCommentLike = (targetId) => {
    const { feedObj, updateList } = this.props;
    const { commentList } = this.state;
    const newList = commentList.map(comment => 
      (comment.id === targetId) ? {...comment, like: !comment.like} : {...comment}
    )
    this.setState({
      commentList: newList
    })
    updateList(feedObj.id, commentList)
  }

  render() {
    const { profile, img, like, myComment } = this.props.feedObj;
    const { isShowMore, commentList, commentValue } = this.state;
    const { updateComment, addComment, toggleCommentLike } = this;

    return (
      <article className="feed">
        <header className="feed-header">
          <div>
            <img alt="feed-profile-img" src={'./images/taehyungkim/' + profile.img} className="feed-profile-img" />
            <strong className="feed-profile-name">{profile.name}</strong>
          </div>
          <button>
            {feedHeadSVG}
          </button>
        </header>
        <img alt="feed-main-img" src={'./images/taehyungkim/' + img} className="feed-main-img" />
        <footer>
          <div className="btn-container">
            <div className="btn-container-left">
              <button className="btn-container-like" key="btn-container-like" onClick={(e) => document.querySelector('.btn-container-like').classList.toggle('like')}>
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
            <img alt="like-first-img" src={'./images/taehyungkim/' + like[0][0]} className="like-first-img" />
            <strong className="like-name">{like[0][1]}</strong>님<strong className="like-count">외 {like.length}명</strong>이 좋아합니다.
          </p>
          <div className="comment-container">
            <div className="my-comment">
              <strong className="my-comment-name">{profile.name}</strong>
              <span className="my-comment-text">
                {isShowMore ? myComment : `${myComment.substring(0, 30)}...`}
              </span>
              <span className="my-comment-more" onClick={() => this.setState({isShowMore: !isShowMore})}>
                {isShowMore ? '숨기기' : '더보기'}
              </span>
            </div>
            <div className="follower-comment-container">
              {commentList.map(comment => 
                <Comment key={comment.id} {...comment} toggleCommentLike={toggleCommentLike} />
              )}
            </div>
          </div>
          <p className="time-content">42분 전</p>
        </footer>
        <form onSubmit={addComment}>
          <input type="text" placeholder="댓글 달기..." value={commentValue} onChange={updateComment} />
          <button type="submit" className={(commentValue) && 'active'}>게시</button>
        </form>
      </article>
    )
  }
}

export default Feed;