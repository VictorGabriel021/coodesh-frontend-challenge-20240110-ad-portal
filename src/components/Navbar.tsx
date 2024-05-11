import Image from "next/image";

import Logo from "@/assets/img/LogoNav.png";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import { MdClose } from "react-icons/md";
import { FaBars } from "react-icons/fa";

import { IoIosArrowDown } from "react-icons/io";

const navigation = [
  { name: "Imobiliárias", href: "#" },
  { name: "Quero me Associar", href: "#" },
  {
    name: (
      <div className="flex items-center gap-x-1">
        Sobre
        <IoIosArrowDown size={18} />
      </div>
    ),
    href: "#",
  },
  { name: "Blog", href: "#" },
];

const navigationMobile = [
  ...navigation,
  { name: "Anunciar Imóvel", href: "#" },
  { name: "Entrar", href: "#" },
];

const Navbar = () => {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="fixed top-0 z-10 bg-white flex items-center justify-between w-full space-x-10 py-3 px-5 lg:m-0 lg:mx-auto mb-[4em] max-w-[1440px]">
            <a href="#" className="mr-3">
              <Image src={Logo} alt="Netimóveis" height={42} />
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
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:hidden">
              <DisclosureButton className="p-2 text-custom-gray-555555 hover:bg-custom-orange-E95808 hover:text-white">
                {open ? <MdClose size={24} /> : <FaBars size={24} />}
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
            <div className="fixed z-10 w-full top-16 space-y-1 px-2 pb-3 pt-2">
              {navigationMobile.map((item, index) => (
                <DisclosureButton
                  key={index}
                  as="a"
                  href={item.href}
                  className={
                    "text-white bg-custom-orange-F36C21 hover:bg-custom-orange-E95808 block rounded-md px-3 py-2"
                  }
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
