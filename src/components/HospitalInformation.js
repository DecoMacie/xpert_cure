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
      <form className="row row-gap-3 g-3" onSubmit={handleFormSubmit}>
        <h3>Hospital</h3>
        <div className="row">
          <div className="col">
            <label className="form-label">Hospital Name</label>
            <input
              className="form-control"
              type="text"
              name="hospitalName"
              value={state.hospitalName}
              onChange={handleChange}
            ></input>
          </div>

          <div className="col">
            <label className="form-label">mobile</label>
            <input
              className="form-control"
              type="number"
              name="mobileHospital"
              value={state.mobileHospital}
              onChange={handleChange}
            ></input>
          </div>

          <div className="col">
            <label className="form-label">Website add</label>
            <input
              className="form-control"
              type="url"
              name="websiteAdd"
              value={state.websiteAdd}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label className="form-label">Address Line 1</label>
            <input
              className="form-control"
              type="text"
              name="addressLine1"
              value={state.addressLine1}
              onChange={handleChange}
            ></input>
          </div>

          <div className="col">
            <label className="form-label">Address Line 2</label>
            <input
              className="form-control"
              type="text"
              name="addressLine2"
              value={state.addressLine2}
              onChange={handleChange}
            ></input>
          </div>

          <div className="col">
            <label className="form-label">Address Line 3</label>
            <input
              className="form-control"
              type="text"
              name="addressLine3"
              value={state.addressLine3}
              onChange={handleChange}
            ></input>
          </div>
        </div>

        <h3>Owner Doctor</h3>
        <div className="row">
          <div className="col">
            <label className="form-label">Name</label>
            <input
              className="form-control"
              type="text"
              name="doctorName"
              value={state.doctorName}
              onChange={handleChange}
            ></input>{" "}
          </div>

          <div className="col">
            <label className="form-label">Designation</label>
            <input
              className="form-control"
              type="text"
              name="designation"
              value={state.designation}
              onChange={handleChange}
            ></input>{" "}
          </div>

          <div className="col">
            <label className="form-label">Mobile</label>
            <input
              className="form-control"
              type="number"
              name="mobileDoctor"
              value={state.mobileDoctor}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              type="email"
              name="emailDoctor"
              value={state.emailDoctor}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <div className="col">
          <Link
            to="/HospitalInformation/DocumentUpload"
            className="btn btn-primary"
          >
            Save and Next
          </Link>
        </div>
      </form>
    </MainLayout>
  );
}
export default HospitalInformation;
