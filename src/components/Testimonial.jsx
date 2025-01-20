import React from "react";

function Testimonial() {
  return (
    <div className="flex flex-col justify-center items-center px-8 pt-6 pb-20">
      <div className="flex flex-col justify-center items-center order-2">
        <div className="bg-green h-60 w-72 rounded-b-3xl rounded-t-full">
          <img src="" alt="" />
        </div>
      </div>
      <div className="flex flex-col justify-center order-1">
        <span className="text-xl font-bold text-red mb-3 text-center">
          Testimonials
        </span>
        <h2 className="text-4xl font-bold mb-5 text-center">
          What Our Customers Say About Us
        </h2>
        <p className="text-para text-lg text-center mb-16">
          “I had the pleasure of dining at Foodi last night, and I'm still
          raving about the experience! The attention to detail in presentation
          and service was impeccable”
        </p>
      </div>
    </div>
  );
}

export default Testimonial;
