import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { Suspense } from "react";
import AllAppsMain from "./AllAppsMain";
import SearchPage from "../SearchPage/SearchPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import AppNotFound from "../AppNotFound/AppNotFound";

const AllAppsRoot = () => {
  const allApps = useLoaderData();

  const [filteredData, setFilteredData] = useState(allApps);

  const isEmpty = filteredData.length === 0;
  // console.log(isEmpty);

  const handleInputData = (e) => {
    const searchTerm = e.target.value;

    const result = allApps.filter((f) =>
      f.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
    );
    setFilteredData(result);
  };

  // console.log(allApps);
  return (
    <div>
      <div className="lg:max-w-7xl lg:mx-auto">
        <div>
          <h1 className="text-[#001931] font-bold text-4xl md:text-5xl text-center mt-20">
            Our All Applications
          </h1>
          <p className="mt-4 mb-10 text-[#627382] text-xl text-center px-3">
            Explore All Apps on the Market Developed by Us. We Code for
            Millions.
          </p>
          <div>
            <div className="mt-10  ml-5">
              <input
                className="text-[#627382] py-[12.5px] lg:pr-[100px] pl-4 rounded-sm border border-[#D2D2D2]  mb-6"
                onChange={handleInputData}
                placeholder="Search Apps"
                type="search"
                name="search"
              />

              <div>
                <h4 className="text-[#001931] font-semibold text-2xl mb-4">
                  {" "}
                  ({filteredData.length}) Apps Found
                </h4>
              </div>
              <div>
                {/* {filteredData.map((data) => ( */}
                <div key={filteredData.id}>
                  {/* Card Section of Search */}
                  <SearchPage></SearchPage>
                </div>
                {/* ))} */}
              </div>
            </div>
          </div>
        </div>
        {isEmpty ? (
          <AppNotFound></AppNotFound>
        ) : (
          <Suspense fallback={<span>Loading...</span>}>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 lg:max-w-7xl lg:mx-auto px-3 lg:px-0">
              {filteredData.map((singleApp) => (
                <AllAppsMain
                  key={singleApp.id}
                  singleApp={singleApp}
                ></AllAppsMain>
              ))}
            </div>
          </Suspense>
        )}

        <div className="text-center  md:mt-10 mt-6 md:mb-20 mb-8"></div>
      </div>
    </div>
  );
};

export default AllAppsRoot;
