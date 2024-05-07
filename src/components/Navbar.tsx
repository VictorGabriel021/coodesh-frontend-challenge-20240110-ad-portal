import Image from "next/image";

import logo from "@/assets/logo.png";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import ArrowDown from "@/assets/icons/ArrowDown";

const navigation = [
  { name: "Imobiliárias", href: "#", current: true },
  { name: "Quero me Associar", href: "#", current: false },
  {
    name: (
      <div className="flex items-center gap-x-1">
        Sobre
        <ArrowDown />
      </div>
    ),
    href: "#",
    current: false,
  },
  { name: "Blog", href: "#", current: false },
];

const navigationMobile = [
  ...navigation,
  { name: "Anunciar Imóvel", href: "#", current: false },
  { name: "Entrar", href: "#", current: false },
];

const Navbar = () => {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="fixed top-0 bg-white flex items-center justify-between w-full space-x-10 py-3 px-5 lg:m-0 lg:mx-auto max-w-screen-xl">
            <a href="#" className="mr-3">
              <Image src={logo} alt="Netimóveis" />
            </a>

            <div className="hidden lg:block">
              <div className="flex items-center lg:space-x-1 xl:space-x-10">
                {navigation.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className={
                      "text-custom-gray-555555 hover:bg-custom-orange-E95808 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    }
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:hidden">
              <DisclosureButton className="p-2 text-custom-gray-555555 hover:bg-custom-orange-E95808 hover:text-white">
                {open ? (
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                )}
              </DisclosureButton>
            </div>

            <div className="flex items-center lg:space-x-4 xl:space-x-8 hidden lg:block">
              <button className="text-custom-purple-652D91 border border-custom-purple-652D91 hover:text-white hover:bg-custom-purple-652D91 rounded-2xl py-1 px-4">
                Anunciar Imóvel
              </button>
              <a
                href="#"
                className="text-custom-gray-555555 hover:text-custom-orange-E95808"
              >
                Entrar
              </a>
            </div>
          </div>

          <DisclosurePanel className="lg:hidden">
            <div className="fixed w-full mt-[4em] space-y-1 px-2 pb-3 pt-2">
              {navigationMobile.map((item, index) => (
                <DisclosureButton
                  key={index}
                  as="a"
                  href={item.href}
                  className={
                    "text-white bg-custom-orange-F36C21 hover:bg-custom-orange-E95808 block rounded-md px-3 py-2"
                  }
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
