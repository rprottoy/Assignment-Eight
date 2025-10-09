import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import downloadIcon from "../../assets/assets/icon-downloads.png";
import ratingIcon from "../../assets/assets/icon-ratings.png";
import reviewIcon from "../../assets/assets/icon-review.png";
import { addToStoredDB } from "../../Utilities/AddToDB";

import Charts from "../AppChart/Charts";

const AppDetails = () => {
  const [installNow, setInstallNow] = useState(false);

  const { id } = useParams();
  const appId = parseInt(id);
  // console.log(id);
  const data = useLoaderData();
  // console.log(data);
  const specificApp = data.find((app) => app.id === appId);

  const {
    image,
    description,
    title,
    downloads,
    ratingAvg,
    size,
    companyName,
    reviews,
  } = specificApp;

  // const handleAppDownload = (id) => {
  //   addToStoredDB(id);
  // };

  return (
    <div>
      <div className="lg:max-w-7xl lg:mx-auto lg:mt-20 mb-10 md:flex items-center ">
        <div>
          <img
            className="overflow-hidden md:w-[350px] mr-10
          "
            src={image}
            alt=""
          />
        </div>
        <div>
          <div className="pl-5 lg:pl-0">
            <h3 className="font-bold text-[32px] text-[#001931] ">{title}</h3>
            <p className="text-[#627382] text-xl mb-[30px] ">
              Developed by{" "}
              <span className="text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                {companyName}
              </span>
            </p>
          </div>
          <div className="lg:flex ml-30 lg:ml-0">
            <div className="mr-6 mb-10 lg:mb-0">
              <img className="w-10" src={downloadIcon} alt="" />
              <p className="text-[#001931] my-2">Downloads</p>
              <h4 className="text-[#001931] font-extrabold text-[40px]">
                {downloads}
              </h4>
            </div>
            <div className="mr-6 mb-10 lg:mb-0">
              <img className="w-10" src={ratingIcon} alt="" />
              <p className="text-[#001931] my-2">Average Ratings</p>
              <h4 className="text-[#001931] font-extrabold text-[40px]">
                {ratingAvg}
              </h4>
            </div>
            <div className="mb-10 lg:mb-0">
              <img className="w-10" src={reviewIcon} alt="" />
              <p className="text-[#001931] my-2">Total Reviews</p>
              <h4 className="text-[#001931] font-extrabold text-[40px]">
                {reviews}
              </h4>
            </div>
          </div>
          <div>
            <button
              onClick={() => setInstallNow(id, !installNow)}
              className="bg-[#00D390] px-5 py-3.5 text-[20px] font-semibold rounded-[4px] ml-15 lg:ml-0 hover:bg-cyan-600"
            >
              {" "}
              {installNow ? "Installed" : "Install Now"} - {size}
              <span>MB</span>
            </button>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-gray-300"></div>
      {/* Chart Section */}

      <div className="lg:max-w-7xl lg:mx-auto">
        <div className="mb-10">
          <h4 className="text-[#001931] font-semibold text-2xl mb-6 ">
            Ratings
          </h4>
          <Charts></Charts>
        </div>
        <div className="border-b-2 border-gray-300 mb-10"></div>
        <div>
          <h4 className="font-semibold text-2xl text-[#001931] mb-6">
            Description
          </h4>
          <p className="text-[#627382] mb-20">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
