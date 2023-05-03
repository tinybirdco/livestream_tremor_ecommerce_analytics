import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { TbConfigProvider } from "trm-tb-plugin";

export default function App({ Component, pageProps }: AppProps) {
  return(
    <TbConfigProvider
      token={process.env.NEXT_PUBLIC_TINYBIRD_TOKEN || ''}
      baseUrl="https://api.tinybird.co/v0/pipes/"
    >
      <Component {...pageProps} />
    </TbConfigProvider>
  );
}