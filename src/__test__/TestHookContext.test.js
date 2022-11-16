import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import Context from "../store/context";
import TestHookContext from "../TextHookContext";

afterEach(cleanup);
it("Context value is updated by child Component", () => {
  render(
    <App>
      <Context.Provider>
        <TestHookContext />
      </Context.Provider>
    </App>
  );
  expect(screen.getByText(/some/i).textContent).toBe("Some Text");
  fireEvent
      .click(screen.getByText('Change Text'))
    expect(screen.getByText(/some/i).textContent).toBe('Some Other Text')
});
