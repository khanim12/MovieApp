import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { createPortal } from "react-dom";

function SignUp({ isClose }) {
  const registerValidation = yup.object().shape({
    name: yup.string().required("Enter your name"),
    lastName: yup.string().required("Enter your LastName"),
    email: yup.string().required("Enter your email address"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 character")
      .required("Enter Password"),
    rePassword: yup
      .string()
      .oneOf([yup.ref("password", yup.password)], "Passwords do not match")
      .required("Confirm password"),
    check: yup.boolean().required("Please confirm the box"),
  });
  const { values, handleSubmit, errors, handleChange } = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
      check: "",
    },
    validationSchema: registerValidation,
    onSubmit: (values, actions) => {
      setTimeout(() => {
        actions.resetForm();
      }, 2000);
    },
  });
  return createPortal(
    <div className="modal-overlay">
      <div className="modal-content" style={{ overflow: "scroll" }}>
        <button onClick={isClose} className="modal-close-button">
          X
        </button>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 justify-between">
            <label htmlFor="username">
              First Name:
              <input
                name="name"
                value={values.name}
                onChange={handleChange}
                className="modal-input w-3/4 ml-12"
                id="username"
                type="text"
                placeholder="Enter firstname"
              />
              {errors.name && <p className="modal-err">{errors.name}</p>}
            </label>
            <label htmlFor="sName">
              Last Name:
              <input
                name="lastName"
                id="sName"
                value={values.lastName}
                onChange={handleChange}
                className="modal-input w-3/4 ml-12"
                type="text"
                placeholder="Enter lastName"
              />
              {errors.lastName && (
                <p className="modal-err">{errors.lastName}</p>
              )}
            </label>
            <label htmlFor="email">
              Email:
              <input
                id="email"
                value={values.email}
                onChange={handleChange}
                className="modal-input w-3/4 ml-12"
                type="email"
                placeholder="Enter email address"
              />
              {errors.email && <p className="modal-err">{errors.email}</p>}
            </label>
            <label htmlFor="password">
              Password:
              <input
                id="password"
                value={values.password}
                onChange={handleChange}
                className="modal-input w-3/4 ml-12"
                type="password"
                placeholder="Enter password"
              />
              {errors.password && (
                <p className="modal-err">{errors.password}</p>
              )}
            </label>
            <label htmlFor="repas">
              Confirm Password:
              <input
                id="rePassword"
                name="rePassword"
                value={values.rePassword}
                onChange={handleChange}
                className="modal-input w-3/4 ml-2"
                type="password"
                placeholder="Enter password again"
              />
              {errors.rePassword && (
                <p className="modal-err">{errors.rePassword}</p>
              )}
            </label>
            <div className="flex gap-2 items-center">
              <input
                onChange={handleChange}
                value={values.check}
                type="checkbox"
              />
              <label>
                I agree to the{" "}
                <span className="underline text-blue-500 cursor-pointer">
                  terms&conditions
                </span>
                {errors.check && <p className="modal-err">{errors.check}</p>}
              </label>
            </div>
            <Button type="submit" variant="contained" color="success">
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}

export default SignUp;
