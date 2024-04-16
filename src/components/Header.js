import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {faCircle} from '@fortawesome/free-solid-svg-icons'



const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext)


  //subscribing to the store//
  const cartItems = useSelector((store)=> store.cart.items)
  console.log(cartItems)

  useEffect(()=> {
    console.log("useEffect called");
  }, [btnNameReact])
    return (
      <div className="flex justify-between bg-pink-100 shadow-lg mb-0 sm:bg-yellow-50 lg:bg-orange-100 ">
        <div className="logo-container">
          <img className="w-56" src={LOGO_URL} />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4 font-bold  hover:text-red-500">
              Online status: {onlineStatus?<FontAwesomeIcon icon={faCircle} className="text-green-500 size-3"/>:<FontAwesomeIcon icon={faCircle} className="text-red-600 size-3"/>}
            </li>
            <li className="px-4 font-bold hover:text-red-500">
              <Link to = "/">Home</Link>
            </li>
            <li className="px-4 font-bold  hover:text-red-500">
              <Link to = "/about">About Us</Link>
            </li>
            <li className="px-4 font-bold  hover:text-red-500">
              <Link to = "/contact">Contact Us</Link>
            </li>
            <li className="px-4 font-bold  hover:text-red-500">
              <Link to = "/grocery">Grocery</Link>
            </li>
            <li className="px-4 font-bold  hover:text-red-500">
            <Link to = "/CartPage"><FontAwesomeIcon icon={faCartShopping} />- ({cartItems.length} items)</Link>
            </li>
            <button
            className = "login font-bold  hover:text-red-500"
            onClick={ () => {
              btnNameReact === "Login" 
              ? setbtnNameReact("Logout")
              : setbtnNameReact("Login");
            }}
            >
              {btnNameReact}
              </button>
              <li className="px-4 font-bold  hover:text-red-500">{loggedInUser }</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;