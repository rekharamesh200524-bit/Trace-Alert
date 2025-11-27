import React, { useState } from 'react'

const Report = () => {
  const [val,setVal]=useState()
  return (
    <>
    <label>Name:</label>
    <input type="text" name='name' value={val.name} onChange={change} required/>

    <label>Email:</label>
    <input type="email" name='email' value={val.email} onChange={change} required />

    <label>Contact Number:</label>
    <input type="Number" name='number' value={val.number} onChange={change} required/>

    <label>Your Relationship with Missing person</label>
    <input type="text" name='relation' value={val.relation} onChange={change} required />

    <label>Name of the Missing person(if you know)</label>
    <input type="text" name='missName' value={val.missName} onChange={change}/>

    <label >Age of Missing Person</label>
    <input type="number" name='age' value={val.age} onChange={change}/>

    <select name="gender" >

    </select>

    <label >Date of Missing Person:</label>
    <input type="text" name='date' value={val.date} onChange={change} required />

    <label>Missing Person identity:</label>
    <textarea name="identity" value={val.identity} onChange={change} ></textarea>


    </>
  )
}

export default Report
