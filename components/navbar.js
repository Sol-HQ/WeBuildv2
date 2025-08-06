import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { useRouter } from "next/router";

const navigation = [
  { name: "Gallery", href: "/gallery" },
  { name: "Music", href: "https://www.affirmamint.cloud" },
  { name: "Photography", href: "https://www.affirmamint.cloud" },
  { name: "CandyMachine", href: "https://www.affirmamint.cloud" },
];

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
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
                {/* Back/Forward Buttons */}
                <div className="flex space-x-2 ml-4">
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
                </div>
                {/* ...rest of your code */}
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-200 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  {/* ... */}
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
                      K.i.t.e.NFT 1SOL_1JUP 4/24
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

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
};

export default Navbar;

