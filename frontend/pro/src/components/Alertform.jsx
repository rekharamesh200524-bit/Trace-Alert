import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Alertform = () => {
 
    const {id}=useParams()
    const [val,setVal]=useState({
        name:"",
        number:"",
        missname:"",
        details:""
    })

 const change=()=>{
    setVal({
        ...val,[e.target.name]:e.target.value
    })
 }

const click=async(e)=>{
e.preventDefault()
}


  return (
   <>
   <form onSubmit={click}>

   <label>Your Name:</label>
   <input type="text" value={val.name} name='name' onChange={change}/>

     <label>Your Contact Number</label>
   <input type="Number" value={val.number} name='number' onChange={change} />

    <label>Name of the Missing Person:</label>
    <input type="text" name='missName' value={val.missName} onChange={change}/>

    <label>Reason to share Alert:</label>
   <textarea name="details" value={val.details}onChange={change} >
   </textarea>

   <button type='submit'>Share Alert</button>

   </form>
  
   </>
  )
}

export default Alertform
