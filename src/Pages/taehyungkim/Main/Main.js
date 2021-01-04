import React, { Component } from 'react';
import { myData, feedData } from '../data/data'
import './Main.scss'
import Navbar from './Components/navbar'
import Feed from './Components/feed'
import Aside from './Components/aside'

class MainTaeHyung extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedList : [],
    }
  }

  componentDidMount() {
    this.setState({
      feedList: feedData
    })
  }

  updateList(id, list) {
    const newList = this.state.feedList.map(ele => {
      return (ele.id === id) ? {...ele, follower: list} : ele
    })
    this.setState({
      feedList: newList
    })
  }

  render() {
    return (
      <div className="Main"> 
        <Navbar />
        <main className="main-container">
          <div className="feeds">
            {this.state.feedList.map((ele) => 
              <Feed
                key={ele.id}
                myData={myData}
                feedObj={ele} 
                updateList={(id, list) => this.updateList(id, list)}
              />
            )}
          </div>
          <Aside />
        </main>
      </div>
    )
  }
}

export default MainTaeHyung;