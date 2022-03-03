interface Buyer {
  name: String;
  organization: String;
  location: String;
}

interface Item {
  transactionId: String;
  price: String;
  date: String;
  buyer: Buyer;
}
