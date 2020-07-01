import React, { useState, useEffect} from 'react';
import Header from '../../components/Header'
import Table from '../../components/Table'

function Todo (){
    const [data, setData] = useState([])

    useEffect(() => {
      async function getTodos(){
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const dataAPI = await response.json();
        setData(dataAPI);
        console.log(dataAPI)
      }
      getTodos();
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
      <h2>Todo</h2>
      <Table data={data} head={head}/>
      </>
    )
  }

export default Todo;