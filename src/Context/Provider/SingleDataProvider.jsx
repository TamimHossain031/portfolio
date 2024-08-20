import { useState } from "react";
import { SingleData } from "..";
const SingleDataProvider = ({ children }) => {
  const [data, setData] = useState("About");

  return (
    <SingleData.Provider value={{ data, setData }}>
      {children}
    </SingleData.Provider>
  );
};

export { SingleDataProvider };
