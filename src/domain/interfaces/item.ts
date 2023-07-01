export interface item {
  id: number | string;
  title: string;
  description?: string;
  category?: string;
  image: string;
  price: number;
  qty?: number;
}
