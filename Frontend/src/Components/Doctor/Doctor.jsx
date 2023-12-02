import "./doctor.css"
import { Link } from "react-router-dom"

const Doctor = () => {
  return <>
    <div className="doctor-wrapper">
      <p>Doctors' Page</p>
      <div className="doctor-pt-details">
          <button>Display Patients</button>
          <div className="dr-display-box">

          </div>
      </div>

      <form action="" method="post" className="doctor-edit">
        <div className="prescribe">
          <p>Prescribe Medication</p>
          <div className="prescribe-row">
            <input type="text" name="med-pt-nme" placeholder="patient name"/>
            <input type="text" name="med-name" placeholder="medication"/>
            <button>Prescribe</button>
          </div>
        </div>
    </form>

      <Link to="/signin">
        <button className="home-btn">Log In Page</button>
      </Link>
    </div>

  </>
}

export default Doctor