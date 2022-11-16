import React, { useReducer } from "react";
import * as ACTIONS from "./store/actions";
import { Reducer, initialState } from "./store/reducer";
const TestHookReducer = () => {
  const [reducerState, dispatch] = useReducer(Reducer, initialState);

  const dispatchActionSuccess = () => {
    dispatch(ACTIONS.SUCCESS);
  };

  const dispatchActionFailure = () => {
    dispatch(ACTIONS.FAILURE);
  };

  return (
    <div>
      <div>
        <h1>Basic react Reducer state</h1>
        {reducerState.stateprop ? (
          <p>stateprop is true</p>
        ) : (
          <p>stateprop is false</p>
        )}
      </div>
      <button onClick={dispatchActionSuccess}>Dispatch Success</button>
    </div>
  );
};

export default TestHookReducer;
