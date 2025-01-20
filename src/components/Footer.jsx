import React from "react";
import facebook from "../assets/social-media/icon_facebook.svg";
import instagram from "../assets/social-media/icon_instagram.svg";
import twitter from "../assets/social-media/icon_twitter.svg";
import youtube from "../assets/social-media/icon_youtube.svg";

function Footer() {
  return (
    <div className="px-8 pt-6 pb-10">
      <div className="grid grid-cols-2">
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="bg-green p-1 h-8 w-8 flex justify-center items-center font-bold text-xl rounded-md text-white">
              F
            </span>
            <p className="font-bold text-2xl">OODI</p>
          </div>
          <p className="text-[15px] text-para mt-3 ">
            Savor the artistry where every dish is a culinary masterpiece
          </p>
        </div>
        <div>
          <span className="text-xl font-semibold">Useful links</span>
          <ul className="mt-3 flex flex-col gap-3">
            <li>About us</li>
            <li>Events</li>
            <li>Blogs</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="mt-7">
          <span className="text-xl font-semibold ">Main Menu</span>
          <ul className="mt-3 flex flex-col gap-3">
            <li>Home</li>
            <li>Offers</li>
            <li>Menus</li>
            <li>Reservation</li>
          </ul>
        </div>
        <div className="mt-7">
          <span className="text-xl font-semibold">Useful links</span>
          <ul className="mt-3 flex flex-col gap-3">
            <li>example@email.com</li>
            <li>+64 958 248 966</li>
            <li>Social media</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center pt-16">
        <div className="flex justify-center items-center">
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
        <div className="mt-6">
          <span>Copyright &#169; 2025 Dscode | All rights reserved</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
