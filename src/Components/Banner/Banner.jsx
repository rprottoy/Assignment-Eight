import React from "react";
import playStore from "../../assets/assets/playStore.png";
import appStore from "../../assets/assets/AppStore.png";
import heroPng from "../../assets/assets/hero.png";
import TrustCount from "./TrustCount";

const Banner = () => {
  const handlePlayStore = () => {
    window.open(
      "https://play.google.com/store/games?hl=en",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleAppStore = () => {
    window.open(
      "https://www.apple.com/app-store/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="mt-10 md:mt-20 font-display  lg:mx-auto">
      <div className="text-center ">
        <h2 className="md:text-7xl text-6xl font-bold text-[#001931]">
          We Build <br />
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-extrabold">
            Productive
          </span>{" "}
          Apps
        </h2>
        <p className="text-[#627382] text-[20px] md:mt-4 mt-6 mb-10 px-2 ">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
      </div>
      <div>
        <div className="flex justify-center  mb-10 ">
          <div>
            <button
              onClick={handlePlayStore}
              className="flex border-2
           border-[#D2D2D2] items-center rounded-sm text-[#001931] font-semibold md:text-[20px] py-4 lg:px-[21.5px] px-3 mr-4 mb-4"
            >
              <img className="w-10 mr-2.5" src={playStore} alt="" />
              <h6>Google Play</h6>
            </button>
          </div>
          <div>
            <button
              onClick={handleAppStore}
              className="flex border-2
           border-[#D2D2D2] items-center rounded-sm text-[#001931] font-semibold md:text-[20px] py-4 md:px-[30.5px] px-3"
            >
              <img className="w-10 mr-2.5" src={appStore} alt="" />
              <h6>App Store</h6>
            </button>
          </div>
        </div>
        <div>
          <img className="mx-auto px-4 lg:mb-0" src={heroPng} alt="" />
        </div>
      </div>
      <div>
        <TrustCount></TrustCount>
      </div>
    </div>
  );
};

export default Banner;
