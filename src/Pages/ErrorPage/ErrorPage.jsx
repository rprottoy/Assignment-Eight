import React from "react";
import pageErrorImg from "../../assets/assets/error-404.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="lg:max-w-7xl lg:mx-auto">
      <div className="mt-20 mb-4 md:w-[500px] mx-auto">
        <img src={pageErrorImg} alt="" />
        <h3 className="text-[#001931] font-semibold text-5xl mb-2 pl-4">
          Oops, page not found!
        </h3>
        <p className="text-[#627382] text-xl pl-4">
          The page you are looking for is not available.
        </p>
        <div className="flex justify-center">
          <Link to={"/"}>
            <button className="mt-4 mb-20 py-[14.5px] px-[40.5px] rounded-sm bg-gradient-to-r from-[#632EE3] to-[#9F62F2] mx-auto ">
              Go Back!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
