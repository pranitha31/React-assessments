import React, { useReducer } from "react";
import { formReducer, initialState } from "../reducer/formReducer";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

function RegistrationForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <div style={{ width: "400px", margin: "auto", marginTop: "50px" }}>
      {state.step === 1 && <Step1 state={state} dispatch={dispatch} />}
      {state.step === 2 && <Step2 state={state} dispatch={dispatch} />}
      {state.step === 3 && <Step3 state={state} dispatch={dispatch} />}
    </div>
  );
}

export default RegistrationForm;
