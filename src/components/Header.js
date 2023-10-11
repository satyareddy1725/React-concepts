import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("LOGOUT");
  const { loggedInUser } = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
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
          <li className="px-4 font-bold">
            <Link to ="/cart">CART ({cartItems.length} Items)</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnName === "LOGOUT" ? setBtnName("LOGIN") : setBtnName("LOGOUT");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 ">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
