import React from "react";
import star from "../assets/special-dishes/star.svg";
import egg from "../assets/special-dishes/Egg-salad.svg";
import fattoush from "../assets/special-dishes/Fattoush-salad.svg";
import vegetable from "../assets/special-dishes/Vegetable-salad.svg";

function SpecialDishes() {
  const specialDishes = [
    {
      topImage: egg,
      title: "Fattoush salad",
      para: "Description of the item",
      price: "24.00",
      point: 4.9,
    },
    {
      topImage: fattoush,
      title: "Vegetable salad",
      para: "Description of the item",
      price: "26.00",
      point: 4.6,
    },
    {
      topImage: vegetable,
      title: "Egg vegi salad",
      para: "Description of the item",
      price: "23.00",
      point: 4.5,
    },
  ];

  return (
    <div className="flex flex-col px-20 pt-6 pb-20">
      <span className="text-xl font-bold text-red mb-3">Special Dishes</span>
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-bold mb-10">
          Standout Dishes From Our Menu
        </h2>
      </div>
      <div className="flex justify-center items-center gap-9">
        {specialDishes.map((dishes, index) => (
          <div
            className="flex flex-col justify-center p-7 rounded-3xl h-[523px] w-[446px] shadow-3xl"
            key={index}
          >
            <img src={dishes.topImage} alt="dishes" />
            <span className="text-xl font-semibold mt-4">{dishes.title}</span>
            <p className="text-[18px] text-para mt-2">{dishes.para}</p>
            <div className="flex justify-between items-center mt-7">
              <span className="flex justify-center items-center gap-1 font-semibold text-xl">
                <span className="text-red">$</span>
                {dishes.price}
              </span>
              <span className="flex justify-center items-center gap-1">
                <img src={star} alt="star" height={20} width={20} />
                {dishes.point}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpecialDishes;
