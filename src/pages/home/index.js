import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Header from '../../components/Header'
import './style.css'
class Home extends Component{
  render(){
    return (
      <>
      <Header/>
        <div className='botoes'>
          <Link to='/todo'>Todo</Link>
          <Link to='/post'>Post</Link>
          <Link to='/album'>Album</Link>
        </div>
      </>
    )
  }
}

export default Home;