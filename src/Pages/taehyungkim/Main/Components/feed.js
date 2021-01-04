import React, { Component } from 'react';
import { feedHeadSVG, btnConSVG } from '../../data/config'
import Comment from './comment';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
      commentVal: '',
      commentList: this.props.feedObj.follower,
    }
  }

  updateComment = (e) => {
    this.setState({
      commentVal: e.target.value
    })
  }

  addComment = (e) => {
    e.preventDefault();
    let newList = this.state.commentList;
    const newComment = {id: newList[newList.length-1].id + 1, name: this.props.myData.name, comment: this.state.commentVal, like: false};
    newList.push(newComment);
    this.setState({
      commentVal: '',
      commentList: newList
    })
    this.props.updateList(this.props.feedObj.id, this.state.commentList)
  }

  toggleCommentLike = (targetId) => {
    const newList = this.state.commentList.map(comment => 
      (comment.id === targetId) ? {...comment, like: !comment.like} : {...comment}
    )
    this.setState({
      commentList: newList
    })
  }

  render() {
    const { profile, img, like, myComment } = this.props.feedObj;

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
                {this.state.showMore ? myComment : `${myComment.substring(0, 30)}...`}
              </span>
              <span className="my-comment-more" onClick={() => this.setState({showMore: !this.state.showMore})}>
                {this.state.showMore ? '숨기기' : '더보기'}
              </span>
            </div>
            <div className="follower-comment-container">
              {this.state.commentList.map(comment => 
                <Comment key={comment.id} {...comment} toggleCommentLike={this.toggleCommentLike} />
              )}
            </div>
          </div>
          <p className="time-content">42분 전</p>
        </footer>
        <form onSubmit={this.addComment}>
          <input type="text" placeholder="댓글 달기..." value={this.state.commentVal} onChange={this.updateComment} />
          <button type="submit" className={(this.state.commentVal) && 'active'}>게시</button>
        </form>
      </article>
    )
  }
}

export default Feed;