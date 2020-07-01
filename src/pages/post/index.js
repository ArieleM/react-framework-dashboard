import React, { useState, useEffect} from 'react';
import Header from '../../components/Header'
import Table from '../../components/Table'

function Posts (){
    const [data, setData] = useState([])

    useEffect(() => {
      async function getPosts(){
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const dataAPI = await response.json();
        setData(dataAPI);
        console.log(dataAPI)
      }
      getPosts();
    }, [])
    const head = [
      'UserId',
      'Id',
      'Title',
      'Body'
  ]
    return (
      <>
      <Header/>
      <h2>Posts</h2>
      <Table data={data} head={head}/>
      </>
    )
  }

export default Posts;