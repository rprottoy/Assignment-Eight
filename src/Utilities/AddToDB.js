const getStoredApp = () => {
  const storedAppSTR = localStorage.getItem("appList");

  if (storedAppSTR) {
    const storedAppData = JSON.parse(storedAppSTR);
    return storedAppData;
  } else {
    return [];
  }
};

const addToStoredDB = (app) => {
  const storedAppData = getStoredApp();

  const isExist = storedAppData.find((props) => props.id === app.id);

  if (isExist) {
    alert("App already downloaded");
  } else {
    storedAppData.push(app);
    // console.log(storedAppData);
    const data = JSON.stringify(storedAppData);
    localStorage.setItem("appList", data);
  }
};

export { addToStoredDB, getStoredApp };
