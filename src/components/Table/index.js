import React, {useState, useEffect} from 'react';
import './style.css'

const Row = ({line, head}) =>{
  return (
    <tr className='line'>
      {
        head.map(key => <td key={key}> {line[key] || key} </td>)
      }
    </tr> 
  )
}
function Table({head, title}) {
  const [order, setOrder] = useState([])
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData(){
      const response = await fetch(`https://jsonplaceholder.typicode.com${title}`);
      const dataAPI = await response.json();
      setData(dataAPI);
    }

    getData();
  }, [title])

  function handleClickOrder(event){
    let filtered = data.sort((a,b)=>{
      if(order !== event && order === ''){
        setOrder(event)
        if(a[event] < b[event]) { return -1; }
        if(a[event] > b[event]) { return 1; }
        return 0;
      }else{
        setOrder('')
        if(a[event] > b[event]) { return -1; }
        if(a[event] < b[event]) { return 1; }
        return 0;
      }
    })
    setData(filtered);
  }
  return (
    <>
    <table>
      <thead >
        <tr className='head'>
          {
            head.map(key => <th key={key}><button onClick={() =>handleClickOrder(key)}>{key} <img src='./seta.svg' alt='seta'/> </button></th>)
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((line) => <Row key={data.indexOf(line)} line={line} head={head}/>)
        }
      </tbody>
    </table>
    </>
  )
}

export default Table;