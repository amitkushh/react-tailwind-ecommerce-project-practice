import React from "react";
import { CirclePlay } from "lucide-react";
import spicy from "../assets/hero-section/food-one.svg";
import salad from "../assets/hero-section/food-two.svg";
import girl from "../assets/hero-section/girl.svg";

function HeroSection() {
  const foodItems = [
    {
      image: spicy,
      title: "Spicy noodles",
      price: "18.00",
    },
    {
      image: salad,
      title: "Vegetarian salad",
      price: "18.00",
    },
  ];

  return (
    <div className="flex justify-center items-center px-20 py-36 border-b-2">
      <div className="w-1/2">
        <h1 className="text-black text-5xl font-extrabold min-w-[500px] mb-9">
          Dive into Delights Of Delectable{" "}
          <span className="text-green">Food</span>
        </h1>
        <p className="text-para text-xl mb-9">
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate
          Craftsmanship
        </p>
        <div className="flex items-center gap-5">
          <button className="text-xl font-medium px-5 py-2 bg-green rounded-full text-white">
            Order Now
          </button>
          <button className="text-xl font-medium flex items-center gap-2 ">
            Watch Video <CirclePlay height={40} width={40} />
          </button>
        </div>
      </div>
      <div className="w-1/2">
        <div>
          <div>
            <img src={girl} alt="girl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
