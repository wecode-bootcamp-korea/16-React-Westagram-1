import React from 'react';

class Comment extends React.Component {
    render() {
        return (
            <div className="Comment">
                <span>1k3h_sh</span>
                <span>{this.props.content}</span>
            </div>
        )
    }
}

export default Comment;