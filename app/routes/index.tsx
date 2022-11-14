import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="relative sm:pb-16 sm:pt-8">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
          <div className="absolute inset-0">
            {/* <img
              className="h-full w-full object-cover"
              src="https://user-images.githubusercontent.com/1500684/157774694-99820c51-8165-4908-a031-34fc371ac0d6.jpg"
              alt="Sonic Youth On Stage"
            /> */}
            <div className="absolute inset-0 bg-[color:rgba(254,204,27,0.5)] mix-blend-multiply" />
          </div>
          <div className="relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pb-20 lg:pt-32">
            <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
              <span className="block uppercase text-black-500 drop-shadow-md">
                Incentera
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-center text-xl text-black sm:max-w-3xl">
              A trust-minimised protocol for incentivised public health alerting.
            </p>
            <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
              <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                <a
                  href="https://github.com/81k-ltd/"
                  className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
                >
                  GitHub
                </a>
                <Link
                  to="/login"
                  className="flex items-center justify-center rounded-md bg-yellow-500 px-4 py-3 font-medium text-white hover:bg-yellow-600"
                >
                  Enter App
                </Link>
              </div>
            </div>
            <a href="https://hack.chain.link">
              <img
                src="/hackathon.svg"
                alt="Chainlink Fall 2022 Hackathon"
                className="mx-auto mt-16 w-full max-w-[12rem] md:max-w-[16rem]"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8">
        <div className="mt-6 flex flex-wrap justify-center gap-8">
          {[
            {
              src: "/glink.png",
              alt: "glink.solutions",
              href: "https://glink.solutions",
            },
            {
              src: "/chainlink.png",
              alt: "Chainlink",
              href: "https://chain.link",
            },
            {
              src: "/81k.png",
              alt: "81k",
              href: "https://81k.link",
            },
          ].map((img) => (
            <a
              key={img.href}
              href={img.href}
              className="flex h-16 w-32 justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0"
            >
              <img alt={img.alt} src={img.src} className="object-contain" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
