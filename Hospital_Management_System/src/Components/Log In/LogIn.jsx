import { Link, useNavigate } from 'react-router-dom'
import './login.css'
import { useState } from 'react'
import axios from 'axios'

const LogIn = () => {

  const navigate = useNavigate()
  const [form, setForm] = useState({
    user_name : "",
    user_password: ""
  })


  const handleForm = (field, value) => {
    setForm((previous_form) => {return {...previous_form, [field] : value}})
    console.log(form)
  }

  const handleAdminSubmit = async () => {
    try {
    const response = await axios.request({
      url : "http://localhost/Hospital_system/Hospital_Management_System/hosp_sys_backend/auth/login_as_admin.php",
      method : "POST",
      data : {...form},
      headers : {"Content-Type" : "application/x-www-form-urlencoded"} 
    })
      console.log(response.data)
      if (response.data === "Welcome Admin"){
        navigate("/admin")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleDoctorSubmit = async () => {
    try{
      const response = await axios.request({
        
      })
    }
    catch {

    }
  }



  return <>
        <form method="post" className='login-wrapper'>
          <h1>Login Page</h1>
          <div className="username-wrap">
              <p>Username</p>
              <input type="text" name="user_name" onChange={(e) => {handleForm("user_name", e.target.value)}}  placeholder='Username...'/>
          </div>

          <div className="password-wrap">
              <p>Password</p>
              <input type="password" name="user_password" onChange={(e) => handleForm("user_password", e.target.value)} placeholder='Password...'/>
          </div> 

          <div className="buttons-wrap">
            
            <button className='login-btn' type='button' onClick={()=> handleAdminSubmit()}>Log In as Admin</button>
            
            <button className='login-btn' onClick={() => handleDoctorSubmit()}>Log In as Doctor</button>
            
            <button className='login-btn'>Log In as Patient</button>
            
            <Link to="/signup">
              <button className='login-btn'>Don't have an account? Sign Up</button>
            </Link>

          </div>
        </form>
  </>
}

export default LogIn