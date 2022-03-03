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

it("sidebar has proper styling", () => {
  act(() => {
    render(<Sidebar />, container);
  });
  console.log(container.querySelector("#sidebar").style);
  expect(container.querySelector("#sidebar").style.padding).toBe(10);
});
