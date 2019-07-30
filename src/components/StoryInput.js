import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Story from './Story'

export default class StoryInput extends Component {
  state = {
    submitClick : false,
    dataArr : [],
    title: '',
    img: '',
    story: '',
    author: ''
  }
  handleSubmit = (e) => {
    e.preventDefault()
  }
  handlChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value,

    })
  }
  clickSubmit = () => {

    const copyArr = Object.assign([], this.state.dataArr)
    
    copyArr.push({
      mytitle : this.state.title,
      myimg : this.state.img,
      mystory : this.state.story,
      myauthor : this.state.author,
    })

    this.setState({
      submitClick: true,
      dataArr : copyArr
    })

    console.log(this.state.dataArr)

  }
  del = (index) => {
    const copyArr = Object.assign([], this.state.dataArr)
    copyArr.splice(index, 1)

    this.setState({
      dataArr : copyArr
    })

  }
  render() {

    return (
      <>
            <Link to="/">
            <button className="back">GO BACK</button>
          </Link>
          <h1 className="share">Share Your Stories</h1>
      <div className="form-div">

        <form onSubmit={this.handleSubmit}>
          <label>Title</label>
          <input type="text" name="title" onChange={this.handlChange}/>
          <label>Image</label>
          <input type="text" name="img" onChange={this.handlChange}/>
          <label>Story</label>
          <textarea name="story" onChange={this.handlChange}></textarea>
          <label>Author</label>
          <input type="text" name="author" onChange={this.handlChange}/>
          <button onClick={this.clickSubmit} onChange={this.handlChange}>SUBMIT</button>
        </form>
      </div>
      <div>
        {this.state.submitClick ? this.state.dataArr.map((story, index) => {
          return(
            <div>
              <Story
                mytitle = {story.mytitle}
                myimg = {story.myimg}
                mystory = {story.mystory}
                myauthor = {story.myauthor}
                del = {this.del.bind(this, index)}
              />
            </div>
          )
        }) : null }
      </div>
      </>
    )
  }
}
