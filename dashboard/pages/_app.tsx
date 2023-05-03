import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { TbConfigProvider } from "trm-tb-plugin";

export default function App({ Component, pageProps }: AppProps) {
  return(
    <TbConfigProvider
      token="p.eyJ1IjogIjk1YWExZmFmLTRkMWItNDdhMy1hZDY0LTE5YWRiZTljZjY0NyIsICJpZCI6ICIwZDRmMTUwNC1hYzU3LTQyOTUtOGNiNS02Y2U1ODY0ZWY2MzkifQ.TDhTQy3kiKUlsbOGQpvUuJUbF4BsCj7ezR_E5y8Jy0o"
      baseUrl="https://api.tinybird.co/v0/pipes/"
    >
      <Component {...pageProps} />
    </TbConfigProvider>
  );
}