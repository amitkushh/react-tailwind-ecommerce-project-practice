import React from "react";
import facebook from "../assets/social-media/icon_facebook.svg";
import instagram from "../assets/social-media/icon_instagram.svg";
import twitter from "../assets/social-media/icon_twitter.svg";
import youtube from "../assets/social-media/icon_youtube.svg";

function Footer() {
  return (
    <div className="px-20 pt-6 pb-10">
      <div className="grid grid-cols-4">
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="bg-green p-1 h-8 w-8 flex justify-center items-center font-bold text-xl rounded-md text-white">
              F
            </span>
            <p className="font-bold text-2xl">OODI</p>
          </div>
          <p className="text-[18px] text-para mt-3 max-w-56">
            Savor the artistry where every dish is a culinary masterpiece
          </p>
        </div>
        <div>
          <span className="text-xl font-semibold mt-3  ">Useful links</span>
          <ul className="mt-3 flex flex-col gap-3">
            <li>About us</li>
            <li>Events</li>
            <li>Blogs</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <span className="text-xl font-semibold ">Main Menu</span>
          <ul className="mt-3 flex flex-col gap-3">
            <li>Home</li>
            <li>Offers</li>
            <li>Menus</li>
            <li>Reservation</li>
          </ul>
        </div>
        <div>
          <span className="text-xl font-semibold mt-3">Useful links</span>
          <ul className="mt-3 flex flex-col gap-3">
            <li>example@email.com</li>
            <li>+64 958 248 966</li>
            <li>Social media</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center pt-16">
        <div className="flex justify-center items-center gap-3">
          <a href="#">
            <span className="bg-social rounded-full h-11 w-11 flex justify-center items-center hover:bg-green cursor-pointer">
              <img src={facebook} alt="facebook" height={25} width={25} />
            </span>
          </a>
          <a href="#">
            <span className="bg-social rounded-full h-11 w-11 flex justify-center items-center hover:bg-green cursor-pointer ">
              <img src={instagram} alt="instagram" height={25} width={25} />
            </span>
          </a>
          <a href="#">
            <span className="bg-social rounded-full h-11 w-11 flex justify-center items-center hover:bg-green cursor-pointer">
              <img src={twitter} alt="twitter" height={25} width={25} />
            </span>
          </a>
          <a href="#">
            <span className="bg-social rounded-full h-11 w-11 flex justify-center items-center hover:bg-green cursor-pointer">
              <img src={youtube} alt="youtube" height={25} width={25} />
            </span>
          </a>
        </div>
        <div className="pr-96">
          <span>Copyright &#169; 2024 Dscode | All rights reserved</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
