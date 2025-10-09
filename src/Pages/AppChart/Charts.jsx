import axios from "axios";
import React, { Suspense } from "react";
import Chart from "./Chart";

const appsPromise = axios.get("../allAppData.json");

const Charts = () => {
  return (
    <div>
      <Suspense
        fallback={<span className="loading loading-spinner loading-lg"></span>}
      >
        <Chart appsPromise={appsPromise}></Chart>
      </Suspense>
    </div>
  );
};

export default Charts;
