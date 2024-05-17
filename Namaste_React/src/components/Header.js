import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems)

    return (
      <div className="Haeder-container flex justify-between bg-pink-100 m-2">
        <div className="logo-container">
          <img
            className="logo w-24"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">Online Status : {onlineStatus ? '🧶' : '🎈'}</li>
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/about">About Us</Link></li>
            <li className="px-4"><Link to="/contact">Contact Us</Link></li>
            <li className="px-4 text-lg font-bold"><Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
            <button className="login px-4" onClick={() => {
                btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;