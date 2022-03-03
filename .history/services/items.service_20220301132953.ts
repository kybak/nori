export const itemsService: APIService = {
  getItems: query =>
    fetch("/api/items", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ query })
    })
      .then(res => res.json())
      .then(json => json.data)
};
