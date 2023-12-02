import Admin from "./Components/Admin/Admin";
import Doctor from "./Components/Doctor/Doctor";
import LogIn from "./Components/Log In/LogIn";
import Patient from "./Components/Patient/Patient";
import SignUp from "./Components/Sign Up/SignUp";
import "./Styles/index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
              <Route element={<LogIn />} path="/signin" />
              <Route element={<Admin />} path="/admin"/>
              <Route element={<Doctor />} path="/doctor"/>
              <Route element={<Patient />} path="/patient"/>
              <Route element={<SignUp />} path="/signup"/>

          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
