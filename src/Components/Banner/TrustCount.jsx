import React from "react";

const TrustCount = () => {
  return (
    <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] ">
      <div className="p-20">
        <h3 className="text-white text-center font-bold md:text-5xl text-4xl mb-10">
          Trusted by Millions, Built for You
        </h3>
        <div className="md:flex justify-around items-center lg:max-w-7xl lg:mx-auto">
          <div className="text-center">
            <p className="text-white ">Total Downloads</p>
            <h3 className="text-white font-extrabold text-[64px] my-4">
              29.6M
            </h3>
            <p className="text-white">21% More Than Last Month</p>
          </div>
          <div className="text-center">
            <p className="text-white ">Total Reviews</p>
            <h3 className="text-white font-extrabold text-[64px] my-4">906K</h3>
            <p className="text-white">46% More Than Last Month</p>
          </div>
          <div className="text-center">
            <p className="text-white ">Active Apps</p>
            <h3 className="text-white font-extrabold text-[64px] my-4">132+</h3>
            <p className="text-white">31 More Will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustCount;
