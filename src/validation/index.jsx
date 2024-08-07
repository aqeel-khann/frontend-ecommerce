import * as Yup from "yup";

export const signinvalidation = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).max(12).required("Plese enter Your Password"),
});

export const signupvalidation = Yup.object({
  name: Yup.string().min(3).max(15).required("Please enetr Your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).max(12).required("Plese enter Your Password"),
});
