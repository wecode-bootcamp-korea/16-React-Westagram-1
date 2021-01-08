import React, { Component } from "react";

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = {};
  }

  // componentDidUpdate() => scrollDown Event
  componentDidUpdate() {
    const { current } = this.ref;
    if (current) current.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    const { userName, commentValue } = this.props;

    return (
      <li ref={this.ref}>
        <div className="westagram__feed__info">
          <p>{userName}</p>
          <span>{commentValue}</span>
        </div>
      </li>
    );
  }
}

export default CommentList;
