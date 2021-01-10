import React from 'react';

class Member extends React.Component {
  render() {
    return (
      <div className="Member">
        <div className="member_img">
          <img src="https://scontent-ort2-2.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_ohc=FbyWMPXOjYgAX_hZ25G&oh=3e9c84895822d1bfb2ef77cdeeae0acf&oe=600CD80F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
            alt="profile_img" />
        </div>
        <div className="member_info">
          <div className="member_id">{this.props.memberName}</div>
          <div>회원님을 위한 추천</div>
        </div>
        <div className="follow_btn_block">
          <button className="follow_btn">팔로우</button>
        </div>
      </div>
    )
  }
}

export default Member;