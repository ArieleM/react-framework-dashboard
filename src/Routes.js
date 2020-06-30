import React, {Component} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/home'
import Post from './pages/post'
import Todo from './pages/todo'
import Album from './pages/album'

class Routes extends Component{ 
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/home' exact component={Home}/>
          <Route path='/post' exact component={Post}/>
          <Route path='/todo' exact component={Todo}/>
          <Route path='/album' exact component={Album}/>
        </Switch>
      </BrowserRouter>
    )
  }
}
export default Routes;