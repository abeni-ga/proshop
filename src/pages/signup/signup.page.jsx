import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../../components/input/input.component";
import Button from "../../components/button/button.component";

import "./signup.styles.scss";

const SignUp = () => {
  return (
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
        email: Yup.string().email("Invalid email address").required("Required"),
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
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {(formik) => (
        <Form>
          <Input label="Name" name="name" type="text" />
          <Input label="Email" name="email" type="email" />
          <Input label="Password" name="password" type="password" />
          <Input
            label="Confirm Password"
            name="confirm_password"
            type="password"
          />

          <Button type="submit">Sign Up</Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;
