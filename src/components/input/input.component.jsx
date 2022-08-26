import { useField } from "formik";
import "./input.styles.scss";

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="input-container">
      <div>
        <label htmlFor={props.id || props.name}>{label}</label>
      </div>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Input;
