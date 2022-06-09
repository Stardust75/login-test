

type product = {
  id: number;
  name: string;
  price: number;
  stock?: number;
  [key:string]: any;
}

type cartItem = {
  productId: number;
  quantity: number;
  name: string;
  price: number;
}