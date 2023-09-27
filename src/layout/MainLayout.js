import React from "react";

function MainLayout({ children }) {
  return (
    <div>
      <div className="row"></div>
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
          <h3>Registration</h3>
        </div>
        <div className="col">{children}</div>
      </div>
    </div>
  );
}

export default MainLayout;
