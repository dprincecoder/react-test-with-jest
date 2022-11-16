import { render, screen } from "@testing-library/react";
import Hello from "../Hello";

test("renders hello word", () => {
  render(<Hello />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});
