import React from "react";
import { useFormik } from "formik";
import {
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Box,
} from "@mui/material";
import { signinvalidation } from "../../validation";
import { useNavigate } from "react-router-dom";
import { loginbuyerapi, loginsellerapi } from "../../apis/auth/loginapi";

export const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      role: "buyer",
    },
    validationSchema: signinvalidation,
    onSubmit: (values) => {
      console.log("Submitting login data:", values);
      if (values.role === "buyer") {
        console.log("buyer");
        loginbuyerapi(values);
      } else {
        console.log("seller");
        loginsellerapi(values);
      }
      // Add your custom validation and form submission logic here
    },
  });

  const handleSignupClick = () => {
    console.log("Signup");
    navigate("/signup");
    // Redirect to signup page or handle signup logic
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        className="p-4 mx-auto w-full sm:w-1/3 bg-white rounded-lg shadow-md md:shadow-lg"
      >
        <h2 className="text-center text-2xl font-bold">User Login</h2>
        <div>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.errors.email}
          />
          <div className="h-5">
            {<p className="text-red-500 text-sm m-0">{formik.errors.email}</p>}
          </div>
        </div>
        <div>
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.errors.password}
          />
          <div className="h-5">
            {
              <p className="text-red-500 text-sm m-0">
                {formik.errors.password}
              </p>
            }
          </div>
        </div>
        <div>
          <FormControl component="fieldset" margin="normal">
            <FormLabel component="legend">Role</FormLabel>
            <RadioGroup
              row
              name="role"
              value={formik.values.role}
              onChange={formik.handleChange}
            >
              <FormControlLabel
                value="seller"
                control={<Radio />}
                label="Seller"
              />
              <FormControlLabel
                value="buyer"
                control={<Radio />}
                label="Buyer"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="w-full text-center">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="mt-4 w-1/2 m-auto hover:bg-blue-700 transition duration-300"
          >
            Submit
          </Button>
        </div>
        <div className="flex justify-between items-center mt-2">
          <h6 className="text-gray-600">Don't have an account?</h6>
          <button
            type="button"
            onClick={handleSignupClick}
            className="text-blue-500 hover:text-blue-700"
          >
            Signup
          </button>
        </div>
      </Box>
    </div>
  );
};

export default Login;
