import * as React from "react";
import { useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../../queries/signUp.mutation";
import Input from "../../components/input/input.component";
import Button from "../../components/button/button.component";
import { Link } from "react-router-dom";
import "./signup.styles.scss";

const SignUp = () => {
  const navigate = useNavigate();
  const [signUp, { data, loading, error }] = useMutation(SIGN_UP);

  useEffect(() => {
    if (data) {
      console.log(data);
      localStorage.setItem("User", JSON.stringify(data.signUp));
      localStorage.setItem("Token", data.signUp?.token);
      navigate("/");
    }
  }, [data, navigate]);
  return (
    <div className="signup-form-container">
      <h1>SIGN UP</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirm_password: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "must be 15 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .required("Required")
            .min(
              8,
              "password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special"
            ),
          confirm_password: Yup.string()
            .required("Required")
            .oneOf([Yup.ref("password"), null], "Passwords must match"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await signUp({
            variables: {
              userInput: {
                name: values.name,
                role: "Patron",
                email: values.email,
                password: values.password,
              },
            },
          });
        }}
      >
        {(formik) => (
          <Form className="signup-form">
            <Input
              label="Name"
              name="name"
              type="text"
              placeholder="Enter Your Name"
            />
            <Input
              label="Email Address"
              name="email"
              type="email"
              placeholder="Enter Email"
            />
            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Enter Password"
            />
            <Input
              label="Confirm Password"
              name="confirm_password"
              type="password"
              placeholder="Confirm Password"
            />

            <Button type="submit">Sign Up</Button>
            <div className="regiter-text">
              <span>Have an Account?&nbsp;</span>
              <Link to="/signin">Login</Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
