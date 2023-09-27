import React from "react";
import HospitalInformation from "./components/HospitalInformation";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <MainLayout>
      {" "}
      <HospitalInformation />
    </MainLayout>
  );
}

export default App;
