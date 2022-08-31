import * as React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Input from "../../components/input/input.component";
import Button from "../../components/button/button.component";

import "./signin.styles.scss";

const SignIn = () => {
  return (
    <div className="signin-form-container">
      <h1>SIGN IN</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("*Required"),
          password: Yup.string()
            .required("*Required")
            .min(8, "password must contain atleast 8 characters"),
        })}
        validateOnChange={false}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {(formik) => (
          <Form className="login-form">
            <Input
              label="Email Address"
              name="email"
              type="text"
              placeholder="Enter Email"
            />
            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Enter Password"
            />
            <Button type="submit">Sign In</Button>
            <div className="regiter-text">
              <span>New Customer?&nbsp;</span>
              <Link to="/signup">Register Here</Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;
