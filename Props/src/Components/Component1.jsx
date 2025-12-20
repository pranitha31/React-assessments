import React from "react";
import Component2 from "./Component2";

const Component1 = () => {
  const a = "Value A";
  const b = "Value B";
  const c = "Value C";
  const d = "Value D";
  const e = "Value E";
  const f = "Value F";

  return (
    <div>
      <h3>Component1</h3>
      <Component2 a={a} b={b} c={c} d={d} e={e} f={f} />
    </div>
  );
};

export default Component1;
