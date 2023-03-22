import React, {
  Component,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";

export interface Seller {
  sellerId: string;
  createdAt: Date;
  updatedAt: Date;
  address: {
    streetName: string;
    buildingNumber: string;
    postalCode: string;
    cityName: string;
  };
  email: string;
  name: string;
  phone: string;
}

interface ISeller {
  sellers: Seller[];
}

const getSellers = async () => {
  let data = await axios({
    url: `${process.env.NEXT_PUBLIC_USER_SERVER_URL}/sellers`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(data.data, "---");
  return data.data;
};

export const sellerContext = createContext<ISeller>({ sellers: [] });

const SellerProvider = ({ children }: any) => {
  const [sellers, setSellers] = useState<Seller[]>([]);
  useEffect(() => {
    getSellers().then((d) => setSellers(d));
  }, []);

  return (
    <sellerContext.Provider value={{ sellers }}>
      {children}
    </sellerContext.Provider>
  );
};

function useSellers() {
  const context = useContext(sellerContext);

  if (context === undefined) {
    throw new Error("useSellers must be used within a SellerProvider");
  }
  return context.sellers;
}

export { SellerProvider, useSellers };
