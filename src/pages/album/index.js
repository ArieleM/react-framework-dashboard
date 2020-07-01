import React, { useState, useEffect} from 'react';
import Header from '../../components/Header'
import Table from '../../components/Table'

function Album (){
    const [data, setData] = useState([])

    useEffect(() => {
      async function getAlbums(){
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        const dataAPI = await response.json();
        setData(dataAPI);
        console.log(dataAPI)
      }
      getAlbums();
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
        <h2>Album</h2>
        <Table data={data} head={head}/>
      </>
    )
  }

export default Album;