import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("LOGOUT");
  return (
    <div className="header">
      <div>
        <img src={LOGO_URL} alt="applogo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT US</Link>
          </li>
          <li>CART</li>
          <button
            className="login"
            onClick={() => {
              btnName === "LOGOUT" ? setBtnName("LOGIN") : setBtnName("LOGOUT");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
