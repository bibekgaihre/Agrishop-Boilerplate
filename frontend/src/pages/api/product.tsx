import React, {
  Component,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";
//get products and sellers
//
export interface Product {
  _id: string;
  sellerId: string;
  productName: string;
  productDescription: string;
  productHighlights: string[];
  size: string[];
  specification: {
    frameType: string;
    brakes: string;
    wheels: string;
    gears: string;
    model: string;
    weight: number;
  };
  availability: boolean;
  unitPrice: number;
  total: number;
  createdAt: Date;
  updatedAt: Date;
}
interface IProduct {
  products: Product[];
}

const getProducts = async () => {
  let data = await axios({
    url: `${process.env.NEXT_PUBLIC_PRODUCT_SERVER_URL}/products`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return data.data;
};

export const productContext = createContext<IProduct>({ products: [] });

const ProductProvider = ({ children }: any) => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    getProducts().then((d) => setProducts(d));
  }, []);

  return (
    <productContext.Provider value={{ products }}>
      {children}
    </productContext.Provider>
  );
};

function useProducts() {
  console.log("inside use product");
  const context = useContext(productContext);
  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context.products;
}

export { ProductProvider, useProducts };
