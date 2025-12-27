import React from 'react'
import './Sign.css'
const Sign = () => {
  const handleInput= () =>{

  }
  return (
    <div>
      <from className='aye'>
        <h1>sign</h1>
        <div className='input'>
          <input type='text' placeholder='name' onChange={handleInput}/>
          <br>
          </br>
          <input type='email' placeholder='email' onChange={handleInput}/>
          <br>
          </br>
          <input type='password' placeholder='password' onChange={handleInput}/>
        </div>
        <br>
        </br>
                        <button>sign</button>
      </from>
  
      </div>
  )
}

export default Sign
