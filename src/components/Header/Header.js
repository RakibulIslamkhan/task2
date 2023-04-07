import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BiMenuAltRight } from "react-icons/bi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import { Disclosure} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: " Inspiration ", href: "#", current: false },
  { name: " Find works ", href: "#", current: false },
  { name: " Learn Design", href: "#", current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const toggleTheme = () => {
    if (!mounted) return;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto px-52 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <h3 className="text-white text-3xl">Logo</h3>
                </div>
                <div className="block sm:ml-6 sm:hidden">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex items-center sm:hidden">
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="rounded-md bg-[#E1DDDD] border-0 py-1.5 pl-7 pr-20 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="search"
                  />
                  <div>
                    {
                      theme === "light" ? ( <BsFillMoonStarsFill className="mx-6 cursor-pointer" onClick={() => toggleTheme()}/> ) : ( <BsSun className="text-yellow mx-6 cursor-pointer"onClick={() => toggleTheme()}/> )
                    }
                    </div>
                    <button className="bg-[#d6505b] h-8 w-24 rounded-md text-gray-light">Login</button>
                </div>
                {/* mobile menu button */}
                 <Disclosure.Button className="hidden rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white sm:block">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          
          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className="lg:hidden">
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="w-full rounded-md bg-[#E1DDDD] border-0 py-1.5 pl-7 pr-20 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 my-4"
                    placeholder="search"
                  />
                  {/* <div>
                    {
                      currentTheme === "light" ? ( <BsFillMoonStarsFill className="mx-6 cursor-pointer" onClick={() => toggleTheme()}/> ) : ( <BsSun className="text-yellow mx-6 cursor-pointer"onClick={() => toggleTheme()}/> )
                    }
                    
                    </div> */}
                    <button className="bg-[#d6505b] h-8 w-24 rounded-md text-gray-light w-full">Login</button>
                </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
