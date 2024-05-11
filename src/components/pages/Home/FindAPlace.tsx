import React, { useState } from "react";

import { FaKey } from "react-icons/fa6";
import { FiDollarSign } from "react-icons/fi";
import { FaHome } from "react-icons/fa";

import NavOptions from "@/components/Navigation/NavOptions";
import ModalContent from "@/components/ModalContent";

import { MdKeyboardArrowRight } from "react-icons/md";

const FindAPlace = () => {
  const [activeNavItem, setActiveNavItem] = useState(0);

  const onGetActiveNavItem = (value: number) => {
    setActiveNavItem(value);
  };

  return (
    <div className="bg-gray-100">
      <div className="flex flex-col lg:flex-row max-w-[1250px] m-auto px-5 py-10">
        <div className="flex-1 mx-0 lg:mx-9 mb-12 lg:mb-0">
          <h2 className="text-custom-gray-4E5254 text-4xl sm:text-6xl font-bold mb-11">
            Encontre um lugar que é a sua cara
          </h2>
          <p className="text-custom-gray-808587 text-xl">
            A Netimóveis te oferece uma experiência ágil e segura na hora de
            comprar ou alugar seu imóvel. Seja de maneira digital ou física,
            fazemos a diferença neste momento tão importante que é decidir um
            lar.
          </p>
        </div>

        <div className="flex-1 w-full bg-white flex flex-col justify-between rounded-2xl px-5 py-10">
          <NavOptions
            navigation={[
              <div key={1} className="flex flex-col items-center gap-2 mb-3">
                <FaKey size={24} /> Alugar <br /> Imóvel
              </div>,
              <div key={1} className="flex flex-col items-center gap-2 mb-3">
                <FiDollarSign size={24} /> Comprar <br /> Imóvel
              </div>,
              <div key={1} className="flex flex-col items-center gap-2 mb-3">
                <FaHome size={24} /> Anunciar <br /> Imóvel
              </div>,
            ]}
            onGetActiveNavItem={onGetActiveNavItem}
          />

          {activeNavItem === 0 && (
            <ModalContent
              title="Alugue sem complicação"
              description="Alugue imóveis qualificados e sem repitição. Sed ut perspiciatis
            unde omnis iste natus error sit."
              buttonText="Ver imóveis para Alugar"
            >
              <a
                href="#"
                className="text-custom-gray-393B3D underline text-sm hover:text-custom-orange-E95808 mb-3"
              >
                Veja como Alugar sem Fiador
              </a>

              <a
                href="#"
                className="text-custom-gray-393B3D underline text-sm hover:text-custom-orange-E95808"
              >
                Saiba como funciona o Aluguel na Netimóveis
              </a>
            </ModalContent>
          )}

          {activeNavItem === 1 && (
            <ModalContent
              title="Compre com Segurança"
              description="Compre seu imóvel com segurança e agilidade. Sed ut perspiciatis unde omnis iste natus error sit."
              buttonText="Ver imóveis para Alugar"
            >
              <a
                href="#"
                className="text-custom-gray-393B3D underline text-sm hover:text-custom-orange-E95808 mb-3"
              >
                Simule seu Financiamento
              </a>

              <a
                href="#"
                className="text-custom-gray-393B3D underline text-sm hover:text-custom-orange-E95808"
              >
                Saiba como funciona a Compra na Netimóveis
              </a>
            </ModalContent>
          )}

          {activeNavItem === 2 && (
            <ModalContent
              title="Anuncie seu Imóvel"
              description="Anuncie gratuitamente na maior rede de imobiliárias do Brasil."
              buttonText="Anunciar Imóvel"
            >
              <a
                href="#"
                className="flex items-center text-custom-gray-393B3D underline text-sm hover:text-custom-orange-E95808 mb-3"
              >
                Descubra Quanto Cobrar <MdKeyboardArrowRight size={24} />
              </a>
            </ModalContent>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindAPlace;
