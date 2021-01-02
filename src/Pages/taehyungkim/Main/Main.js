import React, { Component } from 'react';
import { myData, feedData } from '../data/data'
import './Main.scss'
import Navbar from './Components/navbar'
import Feeds from './Components/feeds'
import Aside from './Components/aside'

class MainTaeHyung extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal : '',
      commentList : feedData[0].follower,
    }
  }

  updateComment = (e) => {
    this.setState({
      inputVal: e.target.value
    })
  }

  addComment = (e) => {
    e.preventDefault();
    const newArr = this.state.commentList;
    const newCom = {id: newArr.length + 1, name: myData.name, comment: this.state.inputVal, like: false};
    newArr.push(newCom);
    this.setState({
      inputVal: '',
      commentList: newArr
    })
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
    return (
      <div className="Main"> 
        <Navbar />
        <main className="main-container">
          <Feeds 
            feedData={feedData} 
            updateComment={this.updateComment}
            addComment={this.addComment}
            toggleCommentLike={this.toggleCommentLike}
            {...this.state}/>
          <Aside />
        </main>
      </div>
    )
  }
}

export default MainTaeHyung;