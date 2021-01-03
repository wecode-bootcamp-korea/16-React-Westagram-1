import React, { Component } from "react";

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = {};
  }

  // componentDidUpdate() => scrollDown Event
  componentDidUpdate() {
    if (this.ref.current)
      this.ref.current.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    const { commentList } = this.props;

    return (
      <>
        <ul id="feed__comment__add">
          <li>
            <div className="westagram__feed__info">
              <p>ky_day</p>
              <span>Happy new Year!! ...</span>
            </div>
          </li>

          {commentList.map((content, idx) => {
            return (
              <li key={idx} ref={this.ref}>
                <div className="westagram__feed__info">
                  <p>ky_day</p>
                  <span>{content}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default CommentList;
