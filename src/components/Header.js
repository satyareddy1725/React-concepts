import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("LOGOUT");
  return (
    <div className="header">
      <div>
        <img src={LOGO_URL} alt="applogo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>ABOUT US</li>
          <li>CONTACT US</li>
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
