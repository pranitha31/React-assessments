import React from "react";

function Step2({ state, dispatch }) {
  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <div>
      <h2>Step 2: Account Details</h2>
      <input
        name="username"
        placeholder="Username"
        value={state.username}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={state.password}
        onChange={handleChange}
      />
      <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>Back</button>
      <button onClick={() => dispatch({ type: "NEXT_STEP" })}>Next</button>
    </div>
  );
}

export default Step2;
