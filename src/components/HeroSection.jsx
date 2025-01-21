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
    <div className="flex flex-col justify-center items-center px-8 py-24 border-b-2">
      <div>
        <h1 className="text-black text-5xl font-bold text-center mb-9">
          Dive into Delights Of Delectable{" "}
          <span className="text-green">Food</span>
        </h1>
        <p className="text-para text-lg mb-9 text-center">
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate
          Craftsmanship
        </p>
        <div className="flex flex-col items-center gap-9 justify-center">
          <button className="text-lg font-medium px-9 py-3 bg-green rounded-full text-white">
            Order Now
          </button>
          <button className="text-lg font-medium flex items-center gap-2">
            Watch Video <CirclePlay height={40} width={40} />
          </button>
        </div>
      </div>
      <div className="mt-12">
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
