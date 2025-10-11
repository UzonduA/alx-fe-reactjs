import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  username: "",
  email: "",
  password: ""
};

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().required("Password is required")
});

function FormikForm() {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {

      const response = await fetch("https://reqres.in/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error("Failed to register user");
      }

      const data = await response.json();
      console.log("Registration successful:", data);
      alert("User registered successfully!");
      resetForm();
    } catch (error) {
      console.error("Error:", error);
      alert("Registration failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return React.createElement(
    Formik,
    { initialValues, validationSchema, onSubmit: handleSubmit },
    (formikProps) =>
      React.createElement(
        Form,
        null,
        React.createElement("h2", null, "Formik Registration Form"),

        React.createElement("div", null,
          React.createElement("label", null, "Username:"),
          React.createElement(Field, { type: "text", name: "username" }),
          React.createElement(ErrorMessage, {
            name: "username",
            component: "p",
            style: { color: "red" }
          })
        ),

        React.createElement("div", null,
          React.createElement("label", null, "Email:"),
          React.createElement(Field, { type: "email", name: "email" }),
          React.createElement(ErrorMessage, {
            name: "email",
            component: "p",
            style: { color: "red" }
          })
        ),

        React.createElement("div", null,
          React.createElement("label", null, "Password:"),
          React.createElement(Field, { type: "password", name: "password" }),
          React.createElement(ErrorMessage, {
            name: "password",
            component: "p",
            style: { color: "red" }
          })
        ),

        React.createElement(
          "button",
          { type: "submit", disabled: formikProps.isSubmitting },
          formikProps.isSubmitting ? "Registering..." : "Register"
        )
      )
  );
}

export default FormikForm;
