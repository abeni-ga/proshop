import "./button.styles.scss";

const Button = ({ children, ...otherProps }) => {
  return (
    <div className="button-container">
      <button {...otherProps}>{children}</button>
    </div>
  );
};

export default Button;
