import React, { createContext, useEffect, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [sharedData, setSharedData] = useState(null);

  useEffect(() => {
    if (sharedData === null) {
      setSharedData('Няма избран продукт!')
    }
  }, [sharedData]);

  const updateSharedData = (data) => {
    setSharedData(data);
  };

  return (
    <DataContext.Provider value={{ sharedData, updateSharedData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
