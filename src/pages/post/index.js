import React from 'react';
import {Link} from 'react-router-dom'
import Header from '../../components/Header'
import Table from '../../components/Table'

function Posts (){
    const head = [
      'userId',
      'id',
      'title',
      'body'
  ]
    return (
      <>
        <Link to='/home'><Header/></Link>
        <h2>Posts</h2>
        <Table head={head} title={'/posts'}/>
      </>
    )
  }

export default Posts;