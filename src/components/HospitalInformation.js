import { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

function HospitalInformation({ onSubmit }) {
  const [state, setState] = useState({
    hospitalName: "",
    mobileHospital: "",
    websiteAdd: "",
    addressLine1: "",
    addressLine2: "",
    addressLine3: "",
    doctorName: "",
    designation: "",
    mobileDoctor: "",
    emailDoctor: "",
  });

  const handleChange = (e) => {
    const val = e.target.value;
    setState({
      ...state,
      [e.target.name]: val,
    });
    console.log(state);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(state);
  };

  return (
    <MainLayout>
      <form onSubmit={handleFormSubmit}>
        <h3>Hospital</h3>
        <div>
          <label>Hospital Name</label>
          <input
            type="text"
            name="hospitalName"
            value={state.hospitalName}
            onChange={handleChange}
          ></input>
          <label>mobile</label>
          <input
            type="number"
            name="mobileHospital"
            value={state.mobileHospital}
            onChange={handleChange}
          ></input>
          <label>Website add</label>
          <input
            type="url"
            name="websiteAdd"
            value={state.websiteAdd}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Address Line 1</label>
          <input
            type="text"
            name="addressLine1"
            value={state.addressLine1}
            onChange={handleChange}
          ></input>
          <label>Address Line 2</label>
          <input
            type="text"
            name="addressLine2"
            value={state.addressLine2}
            onChange={handleChange}
          ></input>
          <label>Address Line 3</label>
          <input
            type="text"
            name="addressLine3"
            value={state.addressLine3}
            onChange={handleChange}
          ></input>
        </div>
        <h3>Owner Doctor</h3>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="doctorName"
            value={state.doctorName}
            onChange={handleChange}
          ></input>
          <label>Designation</label>
          <input
            type="text"
            name="designation"
            value={state.designation}
            onChange={handleChange}
          ></input>
          <label>Mobile</label>
          <input
            type="number"
            name="mobileDoctor"
            value={state.mobileDoctor}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="emailDoctor"
            value={state.emailDoctor}
            onChange={handleChange}
          ></input>
        </div>
        <Link
          to="/HospitalInformation/DocumentUpload"
          className="btn btn-primary"
        >
          Save and Next
        </Link>
      </form>
    </MainLayout>
  );
}
export default HospitalInformation;
