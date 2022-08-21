import { ReactComponent as Logo  } from "../../logo.svg";
import "./Header.styles.scss";
const Header = ()=>{
    return(
    <header>
        <div className="logo">
            <h2 className="name">
                PROSHOP
            </h2>
        </div>
        <div className="buttons">
            <div className="cart">
            <i className="fa-solid fa-cart-shopping"/>
            <h3>Cart</h3>
            </div>
            <div className="signin">
            <i className="fa-solid fa-user"/>
            <h3>Sign In</h3>
            </div>
        </div>
    </header>
    )
}

export default Header;