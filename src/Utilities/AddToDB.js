const getStoredApp = () => {
  const storedAppSTR = localStorage.getItem("appList");

  if (storedAppSTR) {
    const storedAppData = JSON.parse(storedAppSTR);
    return storedAppData;
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storedAppData = getStoredApp();

  if (storedAppData.includes(id)) {
    alert("App already downloaded");
  } else {
    storedAppData.push(id);
    // console.log(storedAppData);
    const data = JSON.stringify(storedAppData);
    localStorage.setItem("appList", data);
  }
};

export { addToStoredDB };
