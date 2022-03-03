import { request } from "graphql-request";

export const itemsService = {
  getItems: query => request("/api/items", query),
  searchItems: query => request("/api/search", query),

  searchItems: query =>
    fetch("/api/search", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ query })
    })
      .then(res => res.json())
      .then(json => json.data)
};
