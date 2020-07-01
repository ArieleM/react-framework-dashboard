import React from 'react';
import {Link} from 'react-router-dom'
import Header from '../../components/Header'
import Table from '../../components/Table'

function Album (){
    const head = [
      'userId',
      'id',
      'title'
  ]
    return (
      <>
        <Link to='/home'><Header/></Link>
        <h2>Albuns</h2>
        <Table head={head}  title={'/albums'}/>
      </>
    )
  }

export default Album;