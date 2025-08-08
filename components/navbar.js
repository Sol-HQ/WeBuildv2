import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { useRouter } from "next/router";

const navigation = [
  { name: "Gallery", href: "/gallery" },
  { name: "Music", href: "/music" },
  { name: "Photography", href: "/photography" },
  { name: "CandyMachine", href: "https://www.affirmamint.cloud" },
];

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo KIT & Affirm  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="https://www.affirmamint.cloud">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-gray-700 dark:text-yellow-700">
                    <span>
                      <Image
                        src="/img/logo.svg"
                        alt="Z"
                        width="22"
                        height="20"
                        className="w-8"
                      />
                    </span>
                    <span>Affirm</span>
                  </span>
                </Link>
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-200 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
                </Disclosure.Button>
                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link
                      href="https://www.affirmamint.cloud"
                      className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5"
                    >
                      KITE NFT 1SOL 1JUP 4/24
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>
                    
        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {/* Back/Forward buttons */}
            <li className="mr-3 nav__item flex items-center space-x-2">
              <button
                type="button"
                onClick={() => router.back()}
                className="px-3 py-1 text-gray-600 bg-gray-100 rounded hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={() => router.forward && router.forward()}
                className="px-3 py-1 text-gray-600 bg-gray-100 rounded hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                Forward →
              </button>
            </li>
            {/* Navigation links */}
            {navigation.map((item, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href={item.href}
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link
            href="https://www.affirmamint.cloud"
            className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
          >
            K.i.t.e.NFT 1SOL_1JUP 4/24
          </Link>
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;







