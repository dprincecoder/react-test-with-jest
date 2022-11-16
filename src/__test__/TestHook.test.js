import React from "react";
import TestHook from "../TestHook.js";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import App from "../App.js";

afterEach(cleanup);

//state change when button is clicked
it("should change state when button is clicked", () => {
  render(<TestHook />);

  const initialState = screen.getByText(/Initial/i);

  expect(initialState.textContent).toBe("Initial State");

  fireEvent.click(screen.getByText("State Change Button"));

  const changedState = screen.getByText(/Initial/i);

  expect(changedState.textContent).toBe("Initial State Changed");
});

//button click changes props
it("should change props when button is clicked", () => {
  render(
    <App>
      <TestHook />
    </App>
  );

  const appInitialState = screen.getByText(/Moe/i);
  expect(appInitialState.textContent).toBe("Moe");

  fireEvent.click(screen.getByText("Change Name"));

  expect(screen.getByText(/Steve/i).textContent).toBe("Steve");
});
