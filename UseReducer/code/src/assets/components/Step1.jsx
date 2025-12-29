import React from "react";

function Step1({ state, dispatch }) {
  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <div>
      <h2>Step 1: Personal Details</h2>
      <input
        name="name"
        placeholder="Name"
        value={state.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={state.email}
        onChange={handleChange}
      />
      <button onClick={() => dispatch({ type: "NEXT_STEP" })}>Next</button>
    </div>
  );
}

export default Step1;
