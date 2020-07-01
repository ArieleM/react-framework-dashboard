import React from 'react';

const Row = ({line}) =>{
  const keys = Object.keys(line);
  return (
    <tr>
      {
        keys.map(key => <td key={key}> {line[key] || key} </td>)
      }
      
    </tr> 
  )
}
function Table({data, head}) {
  return (
    <table>
      <thead>
        <tr>
          {
            head.map(key => <th key={head}>{key}</th>)
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map(line => <Row line={line}/>)
        }
      </tbody>
    </table>
  )
}

export default Table;