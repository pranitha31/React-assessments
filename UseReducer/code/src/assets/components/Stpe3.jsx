import React from "react";

function Step3({ state, dispatch }) {
  const handleSubmit = () => {
    dispatch({ type: "SUBMIT_FORM" });
  };

  return (
    <div>
      <h2>Step 3: Review & Submit</h2>
      <p><strong>Name:</strong> {state.name}</p>
      <p><strong>Email:</strong> {state.email}</p>
      <p><strong>Username:</strong> {state.username}</p>
      <p><strong>Password:</strong> {state.password}</p>

      <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>Back</button>
      <button onClick={handleSubmit}>Submit</button>

      {state.isSubmitted && <h3>Form Submitted Successfully!</h3>}
    </div>
  );
}

export default Step3;
