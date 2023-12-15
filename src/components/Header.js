
import Logo from "../asset/happy-box.jpeg";
import Help from "./Help";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";

const Header = () => {
    const[isLoggedIn,setIsLoggedIn] = useState(true);

    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems);
    
    const onCheck = useOnline();
    if(!onCheck){
        return <h1>❌ You are offline !!</h1>
    }
    return (
    <>
      <div className= "bg-pink-50">
        <ul className="flex justify-between">
            <div className="">
                <Link to="/">
                    <img src={Logo} className="h-24 p-5 pl-5 ps-14 hover:scale-110"/>
                </Link>
            </div>
            <li className="py-10">Location </li>
            <li>
                {onCheck ? "" : "❌"}
            </li>
            <li className="py-10 hover:scale-110 hover:text-red-500">
                <Link to="/Offers" className="special-link">% Offers</Link>
            </li>
            <li className="py-10 hover:scale-110 hover:text-red-500">
                <Link to="/Help" className="special-link">Help</Link>
            </li>
            <li className="py-10 hover:scale-110 hover:text-red-500">
                <Link to="/Cart" className="special-link">{cartItems.length === 0 ? "Cart" : `Cart - ${cartItems.length} item`}</Link>
            </li>
            <li className="py-10 pe-7 hover:scale-110 hover:text-red-500">
                {
                    (isLoggedIn ? <Link to="/log-in" className="py-10">Log In</Link> : <Link to="/" className="py-10" onClick={() => {setIsLoggedIn(true)}}>Log Out</Link>)
                }
            </li>
        </ul>
      </div>
    </>
    )
};

export default Header;