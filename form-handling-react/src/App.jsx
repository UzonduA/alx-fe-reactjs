import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>User Registration</h1>
      <hr />
      <RegistrationForm />
      <hr />
      <FormikForm />
    </div>
  );
}

export default App;
