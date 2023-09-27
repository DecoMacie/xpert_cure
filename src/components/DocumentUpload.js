import { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

function DocumentUpload() {
  const [state, setState] = useState({
    nabh: true,
    nabl: true,
    na: false,
    otherDocument: "",
    certificateNumber: "",
    dateOfJoining: "",
    uploadHospitalCertificates: "",
    uploadDoctorCertificate: "",
    certificateNumberDoctor: "",
    specialization: "",
  });

  const handleChange = (e) => {
    const val =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setState({
      ...state,
      [e.target.name]: val,
    });
    console.log(state);
  };

  return (
    <MainLayout>
      <form>
        <h3>Document Upload</h3>
        <div className="row">
          <div className="col">
            <input
              className="form-check-input"
              type="checkbox"
              name="nabh"
              checked={state.nabh}
              onChange={handleChange}
            ></input>
            <label className="form-check-label">NABH</label>
          </div>

          <div className="col">
            <input
              className="form-check-input"
              type="checkbox"
              name="nabl"
              checked={state.nabl}
              onChange={handleChange}
            ></input>
            <label className="form-check-label">NABL</label>
          </div>

          <div className="col">
            <input
              className="form-check-input"
              type="checkbox"
              name="na"
              checked={state.na}
              onChange={handleChange}
            ></input>
            <label className="form-check-label">NA</label>
          </div>

          <div className="col">
            <label className="form-label">other</label>
            <input
              className="form-control"
              type="text"
              name="otherDocument"
              value={state.otherDocument}
              onChange={handleChange}
            ></input>
          </div>
        </div>

        <h3>Hospital Registration</h3>
        <div className="row">
          <div className="col">
            <label className="form-label">Certificate Number</label>
            <input
              className="form-control"
              type="number"
              name="certificateNumber"
              value={state.certificateNumber}
              onChange={handleChange}
            ></input>
          </div>

          <div className="col">
            <label className="form-label">Date of Joining</label>
            <input
              className="form-control"
              type="date"
              name="dateOfJoining"
              value={state.dateOfJoining}
              onChange={handleChange}
            ></input>
          </div>

          <div className="col">
            <label className="form-label">Upload Certificate</label>
            <input
              className="form-control"
              type="file"
              name="uploadHospitalCertificates"
              value={state.uploadHospitalCertificates}
              onChange={handleChange}
            ></input>
          </div>
        </div>

        <h3>Owner Doctor</h3>
        <div className="row">
          <div className="col">
            <label className="form-label">Upload Certificate</label>
            <input
              className="form-control"
              type="file"
              name="uploadDoctorCertificate"
              value={state.uploadDoctorCertificate}
              onChange={handleChange}
            ></input>
          </div>
          <div className="col">
            <label className="form-label">Name</label>
            <input
              className="form-control"
              type="text"
              name="nameDoctor"
              value={state.nameDoctor}
              onChange={handleChange}
            ></input>
          </div>
          <div className="col">
            <label className="form-label">Certificate number</label>
            <input
              className="form-control"
              type="number"
              name="certificateNumberDoctor"
              value={state.certificateNumberDoctor}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <label className="form-label">Specialization</label>
            <input
              className="form-control"
              type="text"
              name="specialization"
              value={state.specialization}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <Link to="/HospitalInformation" className="btn btn-primary">
          Save and Back
        </Link>
      </form>
    </MainLayout>
  );
}
export default DocumentUpload;
