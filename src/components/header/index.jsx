import React from "react";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import logo from "../../assets/logo.png";
export const Header = () => {
  return (
    <nav className="flex bg-red-300 p-2 justify-between sm:px-10">
      <div>
        <img src={logo} alt="logo" className="h-8 w-8" />
      </div>
      <div>
        <h1>Kelle</h1>
      </div>
      <div>
        <ul className="flex text-center items-center gap-3 sm:gap-4 text-lg">
          <li className="">
            <Link to="/">Home</Link>
          </li>
          <li className="text-lg   sm:text-2xl">
            <Link to="/login">
              <CiUser />
            </Link>
          </li>
          <li>
            <Link to="/signup">Sign In</Link>
          </li>
          <li className="text-lg  md:text-2xl">
            <Link to="/addtocart">
              <CiShoppingCart />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
