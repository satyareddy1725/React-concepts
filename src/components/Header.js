import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("LOGOUT");
  const {loggedInUser} = useContext(userContext);
  // console.log(data)
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg m-10">
      <div>
        <img src={LOGO_URL} alt="applogo" className="w-36" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">ABOUT US</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">CONTACT US</Link>
          </li>
          <li className="px-4">
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li className="px-4">CART</li>
          <button
            className="login"
            onClick={() => {
              btnName === "LOGOUT" ? setBtnName("LOGIN") : setBtnName("LOGOUT");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
