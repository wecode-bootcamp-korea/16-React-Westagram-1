import React from 'react';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentId: '1k3h_sh'
        }
    }


    render() {
        return (
            <div className="comments_container">
                {this.props.commentList.map((el, index) => {
                    return (
                        <div key={index} className="Comment">
                            <span>{this.state.commentId}</span>
                            <span>{el}</span>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Comment;