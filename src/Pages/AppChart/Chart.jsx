import React, { use } from "react";

const Chart = ({ appsPromise }) => {
  const appsDataRes = use(appsPromise);
  const appsData = appsDataRes.data;

  // Data processing for the chart
  const appsChartData = appsData.map((appData) => {
    const app = {
      id: appData.id,
    };
    return app;
  });

  // console.log(appsChartData);
  return <div></div>;
};

export default Chart;
