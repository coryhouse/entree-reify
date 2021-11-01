export type NewMenuItem = {
  name: string;
  description: string;
  price: number | null;
};

export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
};
