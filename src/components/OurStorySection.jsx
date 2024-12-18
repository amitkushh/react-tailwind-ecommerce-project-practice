import React from "react";
import gift from "../assets/our-story/fi-rr-gift.svg";
import salad from "../assets/our-story/fi-rr-salad.svg";
import cart from "../assets/our-story/fi-rr-shopping-cart-check.svg";
import time from "../assets/our-story/fi-rr-time-fast.svg";

function OurStorySection() {
  const ourStory = [
    {
      image: salad,
      title: "Catering",
      para: "Delight your guests with our flavors and  presentation",
    },
    {
      image: time,
      title: "Fast delivery",
      para: "We deliver your order promptly to your door",
    },
    {
      image: cart,
      title: "Online Ordering",
      para: "Explore menu & order with ease using our Online Ordering ",
    },
    {
      image: gift,
      title: "Gift Cards",
      para: "Give the gift of exceptional dining with Foodi Gift Cards",
    },
  ];

  return (
    <div className="flex justify-center items-center px-20 py-36">
      <div className="w-1/2 flex flex-col items-start">
        <span className="text-xl font-bold text-red mb-7">
          Our Story & Services
        </span>
        <h2 className="text-4xl font-bold mb-10 max-w-[420px]">
          Our Culinary Journey And Services
        </h2>
        <p className="text-para text-xl mb-14 max-w-[480px]">
          Rooted in passion, we curate unforgettable dining experiences and
          offer exceptional services, blending culinary artistry with warm
          hospitality.
        </p>
        <button className="text-xl font-medium px-5 py-2 bg-green rounded-full text-white">
          Explore
        </button>
      </div>
      <div className="w-1/2">
        <div className="grid grid-cols-2 gap-8">
          {ourStory.map((ourStoryBox, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center w-[250px] h-[270px] shadow-3xl rounded-3xl"
            >
              <img
                src={ourStoryBox.image}
                alt="category-images"
                width={40}
                height={40}
              />
              <span className="text-xl font-semibold text-green mt-3">
                {ourStoryBox.title}
              </span>
              <p className="text-[18px] mt-2 text-para max-w-44 text-center">
                {ourStoryBox.para}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurStorySection;
