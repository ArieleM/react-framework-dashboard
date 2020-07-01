import React from 'react';
import {Link} from 'react-router-dom'
import Header from '../../components/Header'
import './style.css'

function Home(){
    return (
      <>
      <Link to='/home'><Header/></Link>
        <div className='botoes'>
        <h2>Escolha o que deseja ver:</h2>
          <Link to='/todo'>To-do</Link>
          <Link to='/post'>Postagens</Link>
          <Link to='/album'>Albuns</Link>
        </div>
      </>
    )
  }

export default Home;