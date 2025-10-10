import React, { Suspense } from "react";
import App from "../app/App";
import { Link } from "react-router";

const Apps = ({ appData }) => {
  // const [allApps, setAllApps] = useState([]);

  // useEffect(() => {
  //   fetch("appData.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       setAllApps(data);
  //     });
  // }, []);
  return (
    <div>
      <div>
        <h1 className="text-[#001931] font-bold text-4xl md:text-5xl text-center mt-20">
          Trending Apps
        </h1>
        <p className="mt-4 mb-10 text-[#627382] text-xl text-center px-3">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      {/* <Suspense fallback={<span>Loading...</span>}> */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 lg:max-w-7xl lg:mx-auto px-3 lg:px-0">
        {appData.map((singleApp) => (
          <App key={singleApp.id} singleApp={singleApp}></App>
        ))}
      </div>
      {/* </Suspense> */}
      <div className="text-center  md:mt-10 mt-6 md:mb-20 mb-8">
        <Link to={"/allAppsRoot"}>
          <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-[14.5px] px-[39px] font-semibold rounded-sm">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Apps;
