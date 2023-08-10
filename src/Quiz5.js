
import React from 'react'
import App from './App';


function Quiz5(props) 
{
    console.log(props.name)
    console.log(props.course)
  return (
    <>
      <div> Name : {props.name}</div>
      <div> Course : {props.course}</div>
    </>
     )
}

export default Quiz5; 
