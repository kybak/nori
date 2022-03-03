import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Sidebar from "./Sidebar";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name", () => {
  act(() => {
    render(<Sidebar />, container);
  });

  expect(container.textContent).toBe("Hey, stranger");

  act(() => {
    render(<Sidebar />, container);
  });

  expect(container.textContent).toBe("Hello, Jenny!");

  act(() => {
    render(<Sidebar />, container);
  });

  expect(container.textContent).toBe("Hello, Margaret!");
});
