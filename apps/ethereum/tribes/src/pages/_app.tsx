import "../styles/globals.css";
import type { AppProps } from "next/app";
import * as Hyperverse from "@decentology/hyperverse";
import { networks } from "@decentology/hyperverse";
import * as Ethereum from "@decentology/hyperverse-ethereum";
import * as Tribes from "@decentology/hyperverse-ethereum-tribes";

//@ts-ignore
import { useTribes } from "@hyperverse/hyperverse-ethereum-tribes";
import InnerComponent from "../components/InnerComponent";

function MyApp({ Component, pageProps }: AppProps) {
  const hyperverse = Hyperverse.initialize({
    blockchain: Ethereum,
    network: networks.TestNet,
    modules: [{ bundle: Tribes, tenantId: "tribes" }],
  });
  return (
    <Hyperverse.Provider hyperverse={hyperverse}>
      <InnerComponent>
        <Component {...pageProps} />
      </InnerComponent>
    </Hyperverse.Provider>
  );
}

export default MyApp;
