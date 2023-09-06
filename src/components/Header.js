import { LOGO_URL } from "../utils/constants";


const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          src={LOGO_URL}
          alt="applogo"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>ABOUT US</li>
          <li>CONTACT US</li>
          <li>CART</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
