import { useEffect, useRef, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const usernameref = useRef();
  useEffect(()=>{
    usernameref.current.focus()
  })

  return (
    <div className="App">
      <section className='login' id='login'>
        <div className='head'>
          <img src="https://mateuspntx.github.io/templates/login-page/i/telescope.png"/>
            <h1 className='company'>Universe Explorer</h1>
        </div>
        <p className='msg'>Welcome back</p>
        <div className='form'>
          <form>
            <input type="text" placeholder='Username' className='text' id='username' ref={usernameref} required/><br/>
            <input type="password" placeholder='••••••••••••••' className='password'/><br/>
                <a href="#" className='btn-login' id='do-login'>Login</a>
                <a href="#" className='forgot'>Forgot?</a>
          </form>
        </div>
      </section>
    </div>
)}

export default App
