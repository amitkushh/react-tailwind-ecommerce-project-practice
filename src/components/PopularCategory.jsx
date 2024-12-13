import React from "react";

function PopularCategory() {
  const categoryBox = [
    {
      image: "ul",
      title: "Main Dish",
      paragraph: "(86 dishes)",
    },
    {
      image: "url",
      title: "Break Fast",
      paragraph: "(12 break fast)",
    },
    {
      image: "url",
      title: "Dessert",
      paragraph: "(48 dessert)",
    },
    {
      image: "url",
      title: "Browse All",
      paragraph: "(255 Items)",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center px-20 pt-6 pb-20">
      <span className="text-xl font-bold text-red mb-3">
        Customer Favorites
      </span>
      <h2 className="text-4xl font-bold mb-10">Popular Catagories</h2>
      <div className="grid grid-cols-4 gap-7">
        {categoryBox.map((category, index) => (
          <div
            key={index}
            className="h-40 w-40 border-2 rounded-md flex flex-col justify-center items-center"
          >
            <img src={category.image} alt="food" />
            <span>{category.title}</span>
            <p>{category.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularCategory;
