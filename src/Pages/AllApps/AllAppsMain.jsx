import React from "react";
import downloadIcon from "../../assets/assets/icon-downloads.png";
import IconRating from "../../assets/assets/icon-ratings.png";
import { Link, NavLink } from "react-router";

const AllAppsMain = ({ singleApp }) => {
  const { title, id, downloads, image, ratingAvg } = singleApp;

  // console.log(singleApp);
  return (
    <div>
      <NavLink to={`/appDetails/${id}`}>
        <div className="card bg-white w-12/12 shadow-md rounded-sm ">
          <figure className="rounded-lg pt-4 px-4">
            <img src={image} alt="Apps" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-[#001931]">{title}</h2>

            <div className=" ">
              <div className="flex justify-between">
                <div className="flex items-center bg-[#F1F5E8] rounded-sm py-1.5 px-[10px]">
                  <img className="w-4 h-4 mr-2 " src={downloadIcon} alt="" />
                  <h4 className="font-medium text-[#00D390]">{downloads}</h4>
                </div>
                <div className="flex items-center bg-[#F1F5E8] rounded-sm py-1.5 px-[10px]">
                  <img className="w-4 h-4 mr-2" src={IconRating} alt="" />
                  <h4 className="font-medium text-[#FF8811]">{ratingAvg}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default AllAppsMain;
