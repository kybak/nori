import { request } from "graphql-request";

export const itemsService: APIService = {
  getItems: query => request("/api/items", query),
  search: query => request("/api/search", query)
};
