import React, { Component } from 'react'
import StoryLanding from './components/StoryLanding'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import StoryInput from './components/StoryInput'
import './App.scss'
export default class App extends Component {
  render() {
    return (

        <Router>
          <Switch>
          <Route path="/" exact component={StoryLanding}/>
          <Route path="/storyinput" component={StoryInput}/>
          </Switch>

        </Router>


    )
  }
}
