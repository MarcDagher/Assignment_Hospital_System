import "./signup.css"
import { Link } from "react-router-dom"

const SignUp = () => {
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
            <Link to="/signin">
              <button type="button" className='login-btn'>Sign Up</button>
            </Link>

            <Link to="/signin">
              <button type="button" className='login-btn'>Sign In</button>
            </Link>
          </div>
        </form>

  </>
}

export default SignUp