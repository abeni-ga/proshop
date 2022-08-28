import { ErrorMessage, useField } from "formik";
import "./input.styles.scss";

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="input-container">
      <label className="input-label" htmlFor={props.id || props.name}>
        {label}
      </label>
      <input className="text-input" {...field} {...props} />
      <ErrorMessage name={props.name} component="div" className="error" />
    </div>
  );
};

export default Input;
