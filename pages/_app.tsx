import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { NextPage } from "next";



export default function App({ Component, pageProps }: AppProps) {
  return(
      <Component {...pageProps} />
  );
}