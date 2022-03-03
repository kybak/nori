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

type APIService = Record<string, (a: any) => Promise<any>>;

type CarbonRemoval = {
  id: string;
  project_name: string;
  quantity: number;
  location: string;
  year: string;
};

type Result = {
  id: string;
  quantity: number;
};
