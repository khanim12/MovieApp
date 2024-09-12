import { Button } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { createPortal } from "react-dom";
import * as yup from "yup";
function Login({ close }) {
  const registerFormSchemas = yup.object().shape({
    email: yup
      .string()
      .required("Email address is required")
      .email("Enter correct email adress"),
    password: yup.string().required("Password is required").min(8,"Password must be at least 8 characters")
  });
  const { values, errors,handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: registerFormSchemas,
    onSubmit: (values, action) => {
      console.log(action,values)
      setTimeout(() => {
      action.resetForm()
      }, 2000);
}  });

  return createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={close} className="modal-close-button">
          X
        </button>
        <form onSubmit={handleSubmit}>
        <div className="flex flex-col ">

            <label className="text-xl font-bold " htmlFor="email">
              Email:
            </label>
            <input
              value={values.email}
              onChange={handleChange}
              className="modal-input "
              id="email"
              type="email"
              placeholder="Enter email"
            />
            {errors.email && <p className="modal-err">{errors.email}</p>}
            <label className="text-xl font-bold " htmlFor="password">
              Password:
            </label>
            <input
              value={values.password}
              onChange={handleChange}
              id="password"
              className=" mb-6 modal-input"
              type="password"
              placeholder="Enter password"
            />
            {errors.password && <p className="modal-err">{ errors.password}</p>}
            <Button type="submit" variant="contained" color="success">
              Login
            </Button>{" "}
            </div>

          </form>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}

export default Login;
