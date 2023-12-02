import { Link } from 'react-router-dom'
import './login.css'

const LogIn = () => {

  return <>
        <form action="" method="post" className='login-wrapper'>
          <div className="username-wrap">
              <p>Username</p>
              <input type="text" name="username" placeholder='Username...'/>
          </div>

          <div className="password-wrap">
              <p>Password</p>
              <input type="text" name="password" placeholder='Password...'/>
          </div> 

          <div className="buttons-wrap">
            <Link to="/admin">
              <button type="button" className='login-btn'>Log In as Admin</button>
            </Link>
            <Link to="/doctor">
              <button type="button" className='login-btn'>Log In as Doctor</button>
            </Link>  
            <Link to="/patient">
              <button type="button" className='login-btn'>Log In as Patient</button>
            </Link>
            <Link to="/signup">
              <button type="button" className='login-btn'>Sign Up</button>
            </Link>

          </div>
        </form>
  </>
}

export default LogIn