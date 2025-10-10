import React from "react";
import { getStoredApp } from "../../Utilities/AddToDB";
import downloadIcon from "../../assets/assets/icon-downloads.png";
import IconRating from "../../assets/assets/icon-ratings.png";

const Installations = () => {
  const storedAppData = getStoredApp();

  return (
    <div>
      <div className="lg:max-w-7xl mx-auto">
        <h1 className="text-[#001931] font-bold text-4xl md:text-5xl text-center mt-20">
          Your Installed Apps
        </h1>
        <p className="mt-4 mb-10 text-[#627382] text-xl text-center px-3">
          Explore All Trending Apps on the Market Developed by Us
        </p>
        <div>
          <h4 className="text-[#001931] font-semibold text-2xl mb-4">
            ({storedAppData.length}) Apps Found
          </h4>
          {storedAppData.length > 0 ? (
            <div className="mt-4 mb-20">
              {storedAppData.map((appData) => (
                <div key={appData.id} className="p-4 mb-4 mx-.5 bg-white ">
                  <div className="md:flex justify-between">
                    <div className="flex  items-center gap-2">
                      <div className="w-20 rounded-sm">
                        <img src={appData.image} alt="" />
                      </div>
                      <div>
                        <div>
                          <h4 className="text-[#001931] font-medium text-[20px] mb-4 ">
                            {appData.title}
                          </h4>
                          <div className="flex gap-3 items-center">
                            <div className="flex items-center bg-[#F1F5E8] rounded-sm py-1.5 px-[10px]">
                              <img
                                className="w-4 h-4 mr-2 "
                                src={downloadIcon}
                                alt=""
                              />
                              <h4 className="font-medium text-[#00D390]">
                                {appData.downloads}
                              </h4>
                            </div>
                            <div className="flex items-center bg-[#F1F5E8] rounded-sm py-1.5 px-[10px]">
                              <img
                                className="w-4 h-4 mr-2"
                                src={IconRating}
                                alt=""
                              />
                              <h4 className="font-medium text-[#FF8811]">
                                {appData.ratingAvg}
                              </h4>
                            </div>
                            <div>
                              <div className="bg-[#F1F5E8] rounded-sm py-1.5 px-[10px]">
                                <h4 className="font-medium text-[#FF8811]">
                                  {appData.size} MB
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <button className="bg-[#00D390] rounded-sm  font-semibold px-4 py-3 md:mt-0 mt-2">
                        Uninstall
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No App Installed Right Now</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Installations;
