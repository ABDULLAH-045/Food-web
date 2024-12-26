// types.ts
export type Product = {
    name: string;
    price: string;
    oldPrice?: string; // oldPrice is optional and can be undefined
    image: string;
    isNew?: boolean;   // isNew is optional and can be undefined
  };
  