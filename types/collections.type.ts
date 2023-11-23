export interface Collection {
  coverPicture: string;
  avatar: string;
  name: string;
  description: string;
  itemsQuantity?: number;
  itemsListedQuantity?: number;
  lowest?: string;
  vol?: string;
  properties: Property[];
  address: string;
  owner: string;
  total_supply: number;
}

export interface Property {
  label: string;
  code: string;
}
