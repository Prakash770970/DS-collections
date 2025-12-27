import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {

  
  return (
    <div className='fg'>
    <section className='contact'>
      <form>
        <h2>Contact</h2>
        <div className='input-box'>
          <label>Full name</label>
          <input type="text" className='field' placeholder='enter your name' required/>
        </div>
        <div className='input-box'>
          <label>Email Address</label>
          <input type="text" className='field' placeholder='enter your email' required/>
        </div>
        <div className='input-box'>
          <label>your message</label>
          <textarea name="" id="" className='field' placeholder='enter your message' required>
          </textarea>
        </div>
        <button type='sumbit'>send message</button>
      </form>
    </section>
    </div>
  )
}



export default Contact
