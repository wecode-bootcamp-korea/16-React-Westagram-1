import React, { Component } from 'react';
import { folComSVG } from '../../data/config'

class Comment extends Component {
  render() {
    const { id, name, comment, like, toggleCommentLike } = this.props;

    return (
    <div className="follower-comment-content">
      <div className="follwer-comment-text">
        <strong>{name}</strong><span className="follower-comment">{comment}</span>
      </div>
      <button 
        className={`follower-comment-like ${like ? 'like' : ''}`}
        onClick={() => toggleCommentLike(id)}>
        {folComSVG}
      </button>
    </div>
    )
  }
}

export default Comment;