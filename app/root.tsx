import { useMemo } from "react";
import type { LinksFunction, LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { configureChains, createClient, defaultChains, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import {
  getDefaultWallets,
} from '@rainbow-me/rainbowkit';

import tailwindStylesheetUrl from "./styles/tailwind.css";
import globalStylesUrl from './styles/global.css';
import rainbowStylesUrl from '@rainbow-me/rainbowkit/styles.css';

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: globalStylesUrl },
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    { rel: 'stylesheet', href: rainbowStylesUrl },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Incentera",
  viewport: "width=device-width,initial-scale=1",
});

export const loader: LoaderFunction = () => {
  return json({
    alchemyApiKey: process.env.ALCHEMY_API_KEY as string,
    enableTestnets: process.env.PUBLIC_ENABLE_TESTNETS as string
  })
}

export default function App() {
  const { alchemyApiKey, enableTestnets } = useLoaderData();

  const {client, chains} = useMemo(() => {
    const { chains, provider, webSocketProvider } = configureChains(
      defaultChains,
      [alchemyProvider({ apiKey: alchemyApiKey }), publicProvider()],
    );

    const { connectors } = getDefaultWallets({
      appName: 'Incentera',
      chains,
    });

    return {client: createClient({
      autoConnect: true,
      connectors,
      provider,
      webSocketProvider,
    }), chains: chains}
  }, [alchemyApiKey]);

  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        {client && chains ? (
          <WagmiConfig client={client}>
            <Outlet context={[chains]}/>
          </WagmiConfig>
      ) : null}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
      </body>
    </html>
  );
}
