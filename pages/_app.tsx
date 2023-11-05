import type { AppProps } from "next/app";
import { ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  embeddedWallet, } from "@thirdweb-dev/react";
import { ArtheraTestnet } from "@thirdweb-dev/chains";
import "../styles/globals.css";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/GitHubLink";

// This is the chain your dApp will work on.
const activeChain = ArtheraTestnet;

function MyApp({ Component, pageProps }: AppProps) {
    return (
    <ThirdwebProvider
      activeChain={activeChain}
      clientId="baa74889096f6eb0ae7d57358f7a9ad9"
        supportedWallets={[
          metamaskWallet(),
          coinbaseWallet(),
          walletConnect(),
          embeddedWallet({ recommended: true }),
        ]}>
      <Head>
        <title>thirdweb Edition Drop Minting Customizable Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Learn How To Use Thirdweb's Edition Drop contract and create a customizable Edition Drop minting page"
        />
        <meta
          name="keywords"
          content="Thirdweb, thirdweb Edition drop, how to make thirdweb nft drop, how to make nft collection thirdweb"
        />
      </Head>
      <Component {...pageProps} />
      <ThirdwebGuideFooter />
    </ThirdwebProvider>
  );
}

export default MyApp;
