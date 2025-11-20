type products ={
  id: number;
  name: string;
  price: number;
  stock: boolean;
  color?:string;
  
}

type ProductSummary = Pick<products, "id" | "name" | "stock">

type ProductWithoutStock = Omit<products, "stock">

type productWithColor = Required<products>

const product : productWithColor = {
  id:222,
  name: "smart Watch",
  price: 101,
  stock: true,
  color: "Black"
}

type optionalProduct = Partial<products>

type readonlyProduct = Readonly<products>

const emptyObj: Record<string,unknown> = {}