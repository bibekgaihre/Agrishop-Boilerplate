import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SellerProvider } from "./api/seller";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SellerProvider>
      <Component {...pageProps} />
    </SellerProvider>
  );
}
