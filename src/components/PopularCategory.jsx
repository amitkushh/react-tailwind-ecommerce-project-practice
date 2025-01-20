import React from "react";
import dish from "../assets/popular-section/1.svg";
import breakFast from "../assets/popular-section/2.svg";
import dessert from "../assets/popular-section/3.svg";
import mangose from "../assets/popular-section/4.svg";

function PopularCategory() {
  const categoryBox = [
    {
      image: dish,
      title: "Main Dish",
      paragraph: "(86 dishes)",
    },
    {
      image: breakFast,
      title: "Break Fast",
      paragraph: "(12 break fast)",
    },
    {
      image: dessert,
      title: "Dessert",
      paragraph: "(48 dessert)",
    },
    {
      image: mangose,
      title: "Browse All",
      paragraph: "(255 Items)",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center px-8 pt-6 pb-20">
      <span className="text-xl font-bold text-red mb-3">
        Customer Favorites
      </span>
      <h2 className="text-4xl font-bold mb-10">Popular Catagories</h2>
      <div className="grid grid-cols-2 gap-4">
        {categoryBox.map((category, index) => (
          <div
            key={index}
            className="p-5 h-[200px] w-[200px] shadow-3xl rounded-3xl flex flex-col justify-center items-center"
          >
            <div className="rounded-full h-24 w-24 p-3 bg-popular flex items-center justify-center">
              <img src={category.image} alt="food" width={80} height={80} />
            </div>

            <span className="text-lg font-semibold mt-3">{category.title}</span>
            <p className="text-[15px] text-para ">{category.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularCategory;
