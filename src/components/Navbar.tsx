import Image from "next/image";

import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between  space-x-10 py-3 px-5 m-0 mx-auto max-w-screen-xl">
      <nav>
        <ul className="flex items-center space-x-10">
          <li>
            <Image src={logo} alt="Netimóveis" />
          </li>
          <li className="text-custom-gray">Imobiliárias</li>
          <li className="text-custom-gray">Quero me Associar</li>
          <li className="text-custom-gray">Sobre</li>
          <li className="text-custom-gray">Blog</li>
        </ul>
      </nav>

      <div className="flex  items-center space-x-8">
        <button className="text-purple-800 border border-purple-800 rounded-2xl py-1 px-4">
          Anunciar Imóvel
        </button>
        <a href="#" className="text-custom-gray">
          Entrar
        </a>
      </div>
    </div>
  );
};

export default Navbar;
