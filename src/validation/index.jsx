import * as Yup from "yup";

export const signinvalidation = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).max(12).required("Plese enter Your Password"),
});
