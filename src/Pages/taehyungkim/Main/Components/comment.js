import React, { Component } from 'react';
import { folComSVG } from '../../data/config'

class Comment extends Component {
  render() {
    const { commentInfo, toggleCommentLike } = this.props;

    return (
    <div className="follower-comment-content" key={commentInfo.id}>
      <div className="follwer-comment-text">
        <strong>{commentInfo.name}</strong><span className="follower-comment">{commentInfo.comment}</span>
      </div>
      <button 
        className={`follower-comment-like ${commentInfo.like ? 'like' : ''}`}
        onClick={() => toggleCommentLike(commentInfo.id)}>
        {folComSVG}
      </button>
    </div>
    )
  }
}

export default Comment;