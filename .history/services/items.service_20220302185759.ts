import { request } from "graphql-request";

export const itemsService = {
  getItems: query => request("/api/items", query),
  searchItems: query => request("/api/search", query)
};
