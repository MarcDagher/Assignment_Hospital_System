import { Link } from 'react-router-dom'
import './login.css'
import { useState } from 'react'

const LogIn = () => {

  return <>
        <form method="post" className='login-wrapper'>
          <h1>Login Page</h1>
          <div className="username-wrap">
              <p>Username</p>
              <input type="text" name="username"  placeholder='Username...'/>
          </div>

          <div className="password-wrap">
              <p>Password</p>
              <input type="text" name="password" placeholder='Password...'/>
          </div> 

          <div className="buttons-wrap">
            <Link to="/admin">
              <button type="submit" className='login-btn'>Log In as Admin</button>
            </Link>
            <Link to="/doctor">
              <button type="submit" className='login-btn'>Log In as Doctor</button>
            </Link>  
            <Link to="/patient">
              <button type="submit" className='login-btn'>Log In as Patient</button>
            </Link>
            <Link to="/signup">
              <button type="submit" className='login-btn'>Sign Up</button>
            </Link>

          </div>
        </form>
  </>
}

export default LogIn