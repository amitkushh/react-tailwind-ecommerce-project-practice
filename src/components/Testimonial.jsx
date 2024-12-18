import React from "react";

function Testimonial() {
  return (
    <div className="flex justify-center items-center px-20 pt-6 pb-20">
      <div className="w-1/2 flex flex-col justify-end items-center">
        <div className="bg-green h-60 w-72 rounded-b-3xl rounded-t-full">
          <img src="" alt="" />
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-center">
        <span className="text-xl font-bold text-red mb-3">Testimonials</span>
        <h2 className="text-4xl font-bold mb-10">
          What Our Customers Say About Us
        </h2>
        <p className="text-para text-xl">
          “I had the pleasure of dining at Foodi last night, and I'm still
          raving about the experience! The attention to detail in presentation
          and service was impeccable”
        </p>
      </div>
    </div>
  );
}

export default Testimonial;
