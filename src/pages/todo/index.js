import React from 'react';
import {Link} from 'react-router-dom'
import Header from '../../components/Header'
import Table from '../../components/Table'

function Todo (){
    const head = [
      'userId',
      'id',
      'title',
      'completed'
  ]
    return (
      <>
        <Link to='/home'><Header/></Link>
        <h2>To-do</h2>
        <Table head={head} title={'/todos'}/>
      </>
    )
  }

export default Todo;