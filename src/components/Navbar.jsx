import React from "react";
import { Search, ShoppingBag, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="flex justify-between items-center py-7 px-8 border-b-2">
        <Link to="/">
          <div className="flex justify-center items-center gap-1">
            <span className="bg-green p-1 font-bold text-xl rounded-md text-white h-7 w-7 flex justify-center items-center">
              F
            </span>
            <p className="font-bold text-xl">OODI</p>
          </div>
        </Link>
        <nav className="hidden">
          <ul className="flex justify-center items-center gap-11 text-xl font-medium pl-16 text-navbar">
            <li>Home</li>
            <li>Menu</li>
            <li>Services</li>
            <li>Offers</li>
          </ul>
        </nav>
        <div className="hidden lg:flex lg:justify-center lg:items-center lg:gap-4">
          <Search width={20} height={20} />
          <ShoppingBag width={20} height={20} />
          <button className="flex justify-center items-center gap-2 bg-green px-5 py-2 rounded-full text-white font-medium text-xl">
            <PhoneCall width={20} height={20} />
            Contact
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
