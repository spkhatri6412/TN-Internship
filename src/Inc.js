import React, { useState } from 'react'
import './Login.css'


function Inc()
{
    let count1=0
    const [count,setCount]=useState(0)
    const HandleIncClick = (type)=>
    {
        if(type=='inc')
        {
            setCount(count+1)
        }
        else
        {
            setCount(count-1)
        }
    }
    return(
        <>
    <button onClick={()=>(HandleIncClick('inc'))}>Increment</button>
    {count}
    <button onClick={()=>(HandleIncClick('Dec'))}>Increment</button>
   </> )
}
export default Inc;