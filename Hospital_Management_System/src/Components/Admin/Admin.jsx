import { Link } from "react-router-dom"
import "./admin.css"
import { useEffect, useState } from "react"
import axios from "axios"

const Admin = () => {

  const [type, setType] = useState(null);
  const [data, setData] = useState([])

  const send_request = async () => {
    try {
      const request = await axios.request({
      url : `http://localhost/Hospital_System/Hospital_Management_System/hosp_sys_backend/admin/read_data.php?${type}=true`,
      method : "GET",
      headers : {"Content-Type" : "application/x-www-form-urlencoded"} 
    })
    return request.data
  }
  catch (error) {
    console.log(error)
  }
}

  const handleClick = (type) => {
    setType(type)
  }

  useEffect(() => {
    if (type){
      send_request()
      .then((res) => {setData(res); console.log(res);})
      .catch((error) => {console.log(error)})
    }
  },[type])

  return <>
  <div className="admin-wrapper">
    <p>Admins Page</p>
    <div className="display">
        <div className="display-btns">
            <button type="button" onClick={(e) => {handleClick("show_patients")}} className="dis-btn">Show Patients</button>
            <button  type="button" onClick={(e) => {handleClick("show_doctors")}} className="dis-btn">Show Doctors</button>
            <button type="button" onClick={(e) => {handleClick("show_rooms=emergency")}} className="dis-btn">Emergency Rooms</button>
            <button type="button" onClick={(e) => {handleClick("show_rooms=patient")}} className="dis-btn">Patients' Rooms</button>
        </div>
        <div className="display-box">
        <div className="data">
            {data.map((item, index) => (
              <div key={index}>
                {type === "show_patients" && (
                  <>
                    <p>Name: {item.user_name} - Medication: {item.medication} - Case: {item.patient_case} - Join Date: {item.join_date}</p>
                  </>
                )}
                {type === "show_doctors" && (
                  <>
                    <p>Name: {item.user_name} - User Type: {item.user_type} - Department: {item.department} - Join Date: {item.join_date}</p>
                  </>
                )}
                {type === "show_rooms=patient" && (
                  <>
                    <p>Name: {item.room} - Room Status: {item.status} - patient: {item.user}</p>
                  </>
                )}
                {type === "show_rooms=emergency" && (
                  <>
                    <p>Name: {item.room} - Room Status: {item.status} - patient: {item.user}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
    </div>
 
    <form method="post" className="rooms">
          <div className="er-rooms">
            <p>Assign To Emergency Room</p>
            <div className="btns-row">
              <input type="text" name="pt-name-er" placeholder="name"/>
              <input type="text" name="er-number" placeholder="room number"/>
              <button>Add</button>
            </div>
          </div>
          <div className="pt-rooms">
            <p>Assign To Patients' Room</p>
            <div className="btns-row">
              <input type="text" name="pt-name-pr" placeholder="name"/>
              <input type="text" name="pr-number" placeholder="room number"/>
              <button>Add</button>
            </div>
          </div>
    </form>

    <form method="post" className="patients">
        <div className="add-patient">
          <p>New Patient</p>
          <div className="add-pt-btns">
            <input type="text" name="new-pt-name" placeholder="name"/>
            <input type="text" name="new-pt-case" placeholder="case"/>
            <input type="text" name="new-pt-meds" placeholder="medication(s)"/>
            <button>Add</button>
          </div>
        </div>

        <div className="del-patient">
          <p>Remove Patient</p>
          <div className="del-pt-btns">
            <input type="text" name="old-pt-name" placeholder="name"/>
            <button>Remove</button>
          </div>
        </div>

        <div className="edit-patient">
          <p>Edit Patient</p>
          <div className="edit-pt-btns">
            <input type="text" name="edited-pt-name" placeholder="name"/>
            <input type="text" name="edited-pt-case" placeholder="case"/>
            <input type="text" name="edited-pt-meds" placeholder="medication(s)"/>
            <button>Edit</button>
          </div>
        </div>
    </form>

    <form method="post" className="doctors">
        <div className="add-doctor">
          <p>New Doctor</p>
          <div className="add-dr-btns">
            <input type="text" name="new-dr-name" placeholder="name"/>
            <input type="text" name="new-dr-dep" placeholder="department"/>
            <button>Add</button>
          </div>
        </div>

        <div className="del-doctor">
          <p>Remove Doctor</p>
          <div className="del-dr-btns">
            <input type="text" name="old-dr-name" placeholder="name"/>
            <input type="text" name="old-dr-dep" placeholder="department"/>
            <button>Remove</button>
          </div>
        </div>

        <div className="edit-doctor">
          <p>Edit Doctors</p>
          <div className="edit-dr-btns">
            <input type="text" name="edited-dr-name" placeholder="name"/>
            <input type="text" name="edited-dr-dep" placeholder="department"/>
            <button>Edit</button>
          </div>
        </div>
    </form>
    <Link to="/"> 
      <button className="home-btn">Log In Page</button>
    </Link>
  </div>
</>
}

export default Admin