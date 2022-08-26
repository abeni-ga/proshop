import "./button.styles.scss";

const Button = ({ children, ...otherProps }) => {
  return (
    <div className="button-container">
      <button className="btn" {...otherProps}>
        {children}
      </button>
    </div>
  );
};

export default Button;
