import { useState } from "react"
import "./signup.css"
import { Link } from "react-router-dom"
import axios from "axios"

const SignUp = () => {
  const [form, setForm] = useState({user_name : "", user_password : ""})
  const [success, setSuccess] = useState('')

  const Handle_Submit = async () => {
    try{ const response = await axios.request(
      {
      url: `http://localhost/Hospital_system/Hospital_Management_System/hosp_sys_backend/auth/signup.php`,
      data: {...form},
      method:'POST',
      headers: {"Content-Type":"application/x-www-form-urlencoded"}  
    })
    setSuccess(response.data)
    return response.data
    }catch(error) {
      console.log(error)
    } 
  }

  const Handle_Form = (field, value) => {
    setForm((previous_form) => { return {...previous_form, [field] : value}})
  }

  return <>
    <form method="post" className='login-wrapper'>
          <div className="username-wrap">
            {success ==="Username already found" ? (<p>Username Already Found</p>) : success === "User Created Successfully" ? (<p>User created successfully, proceed to sign in</p>) : null}
            {/* {success === "User Created Successfully" && setForm({ user_name: "", user_password: "" })} */}

              <p>Username</p>
              <input type="text" name="user_name" onChange={(e) => Handle_Form('user_name', e.target.value)} placeholder='Username...'/>
          </div>

          <div className="password-wrap">
              <p>Password</p>
              <input type="password" name="user_password" onChange={(e) => Handle_Form('user_password', e.target.value)} placeholder='Password...'/>
          </div> 

          <div className="buttons-wrap">
            
            <button type="button" className='login-btn' onClick={() => Handle_Submit()}>Create Account</button>
            
            <Link to="/">
              <button type="button" className='login-btn'>Sign In</button>
            </Link>
          </div>
        </form>

  </>
}

export default SignUp