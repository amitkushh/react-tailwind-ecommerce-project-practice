import React from "react";
import { Search, ShoppingBag, PhoneCall } from "lucide-react";

function Navbar() {
  return (
    <>
      <header className="flex justify-between items-center py-3 px-20 border-b-2">
        <div className="flex justify-center items-center gap-1">
          <span className="bg-green p-2 font-bold text-2xl rounded-md text-white">
            F
          </span>
          <p className="font-bold text-2xl">OODI</p>
        </div>
        <nav>
          <ul className="flex justify-center items-center gap-11 text-xl font-medium pl-16 text-navbar">
            <li>Home</li>
            <li>Menu</li>
            <li>Services</li>
            <li>Offers</li>
          </ul>
        </nav>
        <div className="flex justify-center items-center gap-7">
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
