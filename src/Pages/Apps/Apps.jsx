import React, { Suspense } from "react";
import App from "../app/App";

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
      <h1 className="text-black text-center">Apps</h1>
      <Suspense fallback={<span>Loading...</span>}>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 lg:max-w-7xl lg:mx-auto px-3 lg:px-0">
          {appData.map((singleApp) => (
            <App key={singleApp.id} singleApp={singleApp}></App>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Apps;
