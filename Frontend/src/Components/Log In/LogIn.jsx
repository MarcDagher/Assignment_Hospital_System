import { Link } from 'react-router-dom'
import './login.css'
import { useState } from 'react'

const LogIn = () => {

  const [formData, setFormData] = useState({
    username : '',
    password : ''
  })
  
  const Handle_Change = (e) => {
    // ...formData is to copy the pre-existing state. a good practice for not changing the state directly. 
    // so we are creating a new object with the previous key: value
    // 
    // : e.target.value assigns the value to the name

    setFormData({...formData, [e.target.name] : e.target.value})
}

  const Handle_Submit = (e) => {
    e.preventDefault()


}

  return <>
        <form method="post" className='login-wrapper' onSubmit={Handle_Submit}>
          <h1>Login Page</h1>
          <div className="username-wrap">
              <p>Username</p>
              <input type="text" name="username" value={formData.username} onChange={Handle_Change} placeholder='Username...'/>
          </div>

          <div className="password-wrap">
              <p>Password</p>
              <input type="text" name="password" value={formData.password} onChange={Handle_Change} placeholder='Password...'/>
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