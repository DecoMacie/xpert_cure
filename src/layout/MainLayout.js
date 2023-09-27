import React from "react";
import logo from "../images/logo.png";

function MainLayout({ children }) {
  return (
    <div className="mx-auto p-2 gap-3">
      <div className="row">
        <div className="col">
          <img src={logo} alt="logo" />
        </div>
        <div className="col"></div>
      </div>
      <div className="row">
        <div
          className="col-2"
          style={{
            backgroundColor: "#1AA7EC",
            color: "white",
            height: "1024px",
            width: "256px",
          }}
        >
          <h3 className="position-relative top-50 start-0">Registration</h3>
        </div>
        <div className="col border border-5 rounded">
          <div className="container">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
