import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Input from "../../components/input/input.component";
import Button from "../../components/button/button.component";

import "./signin.styles.scss";

const SignIn = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {(formik) => (
        <Form>
          <Input label="Email" name="email" type="text" />
          <Input label="Password" name="password" type="password" />
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignIn;
