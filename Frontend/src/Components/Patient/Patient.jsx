import "./patient.css"
import { Link } from "react-router-dom"
const Patient  = () => {
  return <>
    <div className="patient-wrapper">
      <p>Patient's Page</p>
      <div className="patient-details">
          <button>Display Patients</button>
          <div className="patient-display-box">

          </div>
      </div>
      <Link to="/">
        <button className="home-btn">Log In Page</button>
      </Link>
    </div>
  </>
}


export default Patient 