import type { ActionArgs, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useOutletContext } from "@remix-run/react";

import {
  RainbowKitProvider,
  ConnectButton,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import type { Chain } from "wagmi";

export async function loader({ request }: LoaderArgs) {
  return json({});
}

export async function action({ request }: ActionArgs) {}

export const meta: MetaFunction = () => {
  return {
    title: "Incentera",
  };
};

export default function LoginPage() {
  const chains = useOutletContext();
  return (
    <div className="flex h-screen flex-col">
      <nav className="fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-white px-2 py-2.5 dark:border-gray-600 sm:px-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="/incentera.png"
              className="mr-3 h-6 sm:h-9"
              alt="Incentera Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-black">
              Incentera
            </span>
          </Link>
          <div className="flex md:order-2">
            <RainbowKitProvider
              chains={chains as Chain[]}
              theme={darkTheme({
                accentColor: "#1d4ed8",
                accentColorForeground: "white",
                borderRadius: "small",
                fontStack: "system",
                overlayBlur: "small",
              })}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  padding: "12px",
                }}
              >
                <ConnectButton />
              </div>
            </RainbowKitProvider>
          </div>
        </div>
      </nav>

      <div className="to-blue-250 flex-1 bg-gradient-linear from-blue-500 bg-fixed">
        <div className="mx-auto mt-20 flex max-w-7xl flex-row justify-center py-2 px-4 sm:px-6 lg:px-8">
          <div className="mt-10 ml-4 flex justify-center gap-8">
            <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
              <div className="flex flex-col items-center pt-5 pb-10">
                <div className="flex flex-row items-center px-5">
                  <img
                    className="h-24 w-24 rounded-md border border-gray-300 shadow-lg"
                    src="/reputation-nft.png"
                    alt="Reputation NFT"
                  />
                  <div className="flex flex-col items-center px-5">
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                      Steve Ellis
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      777 INT - Advanced
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex space-x-3 md:mt-6">
                  <a
                    href="/"
                    className="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    View on OpenSea
                  </a>
                  <a
                    href="/"
                    className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    Edit Profile
                  </a>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="mx-2 mt-6 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                      <div className="h-2.5 w-44 rounded-full bg-blue-600"></div>
                    </div>
                  </div>
                  <div className="m-1 flex flex-row">
                    <span className="mx-8 text-sm font-medium text-blue-700 dark:text-white">
                      Novice
                    </span>
                    <span className="mx-8 text-sm font-medium text-blue-700 dark:text-white">
                      Intermediate
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 ml-4 flex flex-col sm:space-y-0">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-800 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      Active jobs
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="light:bg-gray-900 light:border-gray-700 border-b bg-white">
                    <td className="py-4 px-6">My first active job</td>
                  </tr>
                  <tr className="light:bg-gray-900 light:border-gray-700 border-b bg-white">
                    <td className="py-4 px-6">My second active job</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mx-4 mt-10 flex flex-col sm:space-y-0">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-800 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      Finished jobs
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="light:bg-gray-900 light:border-gray-700 border-b bg-white">
                    <td className="py-4 px-6">My first finished job</td>
                  </tr>
                  <tr className="light:bg-gray-900 light:border-gray-700 border-b bg-white">
                    <td className="py-4 px-6">My second finished job</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
