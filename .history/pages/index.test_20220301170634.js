import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import CreatorDashboard from "./index";
import { itemsService } from "../services";

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

it("renders items data", async () => {
  const fakeItem = {
    transactionId: "98981237981289",
    buyer: {
      name: "John Doe",
      organization: "Organization Name",
      location: "123 Some Address, WA USA"
    },
    price: ".084 ETH",
    date: "3/4/22"
  };

  jest.spyOn("itemsService", "getItems").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeItem)
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<CreatorDashboard />, container);
  });

  const fakeItemKeys = Object.keys(fakeItem);

  container.querySelector("td").forEach((td, i) => {
    switch (fakeItemKeys[i]) {
      case "transactionId":
        expect(td.textContent).toMatch(new RegExp(fakeItem.transactionId));
        break;
      case "buyer":
        expect(td.textContent).toMatch(new RegExp(fakeItem.buyer.name));
        break;
      case "price":
        expect(td.textContent).toMatch(new RegExp(fakeItem.price));
        break;
      case "date":
        expect(td.textContent).toMatch(new RegExp(fakeItem.date));
        break;
    }
  });

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});
