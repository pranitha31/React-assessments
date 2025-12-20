import React from "react";
import { AppContext } from ".createContext/AppContext";
import Component2 from "./Component2";

const Component1 = () => {
  const values = {
    a: "Value A",
    b: "Value B",
    c: "Value C",
    d: "Value D",
    e: "Value E",
    f: "Value F",
  };

  return (
    <AppContext.Provider value={values}>
      <Component2 />
    </AppContext.Provider>
  );
};

export default Component1;
