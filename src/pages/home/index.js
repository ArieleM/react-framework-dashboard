import React from 'react';
import {Link} from 'react-router-dom'
import Header from '../../components/Header'
import './style.css'

function Home(){
    return (
      <>
      <Header/>
        <div className='botoes'>
        <h2>Escolha o que deseja ver:</h2>
          <Link to='/todo'>Todo</Link>
          <Link to='/post'>Post</Link>
          <Link to='/album'>Album</Link>
        </div>
      </>
    )
  }

export default Home;