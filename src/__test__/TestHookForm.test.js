import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import TestForm from "../TestForm";

afterEach(cleanup);

//testing  a controlled component form
it("inputing text updates the state", () => {
  render(<TestForm />);
  expect(screen.getByText(/Change/i).textContent).toBe("Change: ");
  fireEvent.change(screen.getByLabelText("Input Text:"), {
    target: { value: "Text" },
  });

  expect(screen.getByText(/Change/i).textContent).not.toBe("Change: ");
});

it("submiting a form works correctly", () => {
  render(<TestForm />);

  expect(screen.getByText(/Submit Value/i).textContent).toBe("Submit Value: ");

  fireEvent.submit(screen.getByTestId("form"), {
    target: { text: { value: "Text" } },
  });

  expect(screen.getByText(/Submit Value/i).textContent).not.toBe(
    "Submit Value: "
  );
});
