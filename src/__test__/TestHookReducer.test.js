import React from "react";
import ReactDOM from "react-dom";
import TestHookReducer from "../TestHookReducer";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import * as Reducer from "../store/reducer";
import * as ACTIONS from "../store/actions";

afterEach(cleanup);

describe("test the reducer and actions", () => {
  it("should return the initial state", () => {
    expect(Reducer.initialState).toEqual({ stateprop: false });
  });
  it("should change stateprop from false to true", () => {
    expect(Reducer.Reducer(Reducer.initialState, ACTIONS.SUCCESS)).toEqual({
      stateprop: true,
    });
  });
});

it("Reducer changes stateprop from false to true", () => {
  const { container } = render(<TestHookReducer />);
  expect(screen.getByText(/stateprop is/i).textContent).toBe(
    "stateprop is false"
  );
  fireEvent.click(screen.getByText("Dispatch Success"));
  expect(screen.getByText(/stateprop is/i).textContent).toBe(
    "stateprop is true"
  );
});
