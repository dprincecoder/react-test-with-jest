import { cleanup, render, screen } from "@testing-library/react";
import axiosMock from "axios";
import TestFetch from "../TestFetch";
afterEach(cleanup);

it("Async axios request works", async () => {
  axiosMock.get.mockResolvedValue({ data: { title: "some title" } });

  const url = "https://jsonplaceholder.typicode.com/posts/1";
   render(<TestFetch url={url} />);

  expect(screen.getByText(/...Loading/i).textContent).toBe("...Loading");

  const resolvedEl = await screen.findByTestId("title");

  expect(resolvedEl.textContent).toBe("some title");

  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith(url);
});
