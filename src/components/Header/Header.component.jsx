import { Link } from "react-router-dom";
import "./Header.styles.scss";
const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <h2 className="name">PROSHOP</h2>
        </Link>
      </div>
      <div className="buttons">
        <div className="cart">
          <Link
            to="/cart"
            style={{
              textDecoration: "none",
              color: "white",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <i className="fa-solid fa-cart-shopping" />
            <h3>Cart</h3>
          </Link>
        </div>
        <div className="signin">
          <i className="fa-solid fa-user" />
          <h3>Sign In</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
