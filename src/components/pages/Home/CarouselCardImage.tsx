import { useState } from "react";

import Image from "next/image";

import MorningSun from "@/assets/img/MorningSun.png";
import PetFriendly from "@/assets/img/PetFriendly.png";
import ItHasABackyard from "@/assets/img/ItHasABackyard.png";
import ItHasABalcony from "@/assets/img/ItHasABalcony.png";
import GoodInternet from "@/assets/img/GoodInternet.png";
import BusNearby from "@/assets/img/BusNearby.png";

import NavOptionsWithArrows from "@/components/Navigation/NavOptionsWithArrows";
import ModalContent from "@/components/ModalContent";

import { PiSunHorizonFill } from "react-icons/pi";
import { MdPets } from "react-icons/md";
import { FaBusAlt } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";

const Images = [
  { image: MorningSun, alt: "Morning Sun" },
  { image: PetFriendly, alt: "Pet Friendly" },
  { image: ItHasABalcony, alt: "It Has A Balcony" },
  { image: BusNearby, alt: "Bus Nearby" },
  { image: ItHasABackyard, alt: "It Has A Backyard" },
  { image: GoodInternet, alt: "Good Internet" },
];

const CarouselCardImage = () => {
  const [activeNavItem, setActiveNavItem] = useState(0);

  const onGetActiveNavItem = (value: number) => {
    setActiveNavItem(value);
  };

  return (
    <>
      <div className="flex items-center none md:relative inline-block w-auto rounded-xl overflow-hidden">
        <Image
          src={Images[activeNavItem].image}
          alt={Images[activeNavItem].alt}
          className="h-[600px] object-cover hidden md:block"
        />
        <div className="none md:absolute left-20 max-w-full md:max-w-[520px]">
          <div className="flex-1 w-full bg-white flex flex-col justify-between rounded-2xl px-5 py-10">
            <NavOptionsWithArrows
              navigation={[
                <div key={1} className="flex flex-col items-center gap-2 mb-3">
                  <PiSunHorizonFill size={24} /> Pega <br /> Sol
                </div>,
                <div key={1} className="flex flex-col items-center gap-2 mb-3">
                  <MdPets size={24} /> Aceitam <br /> Pet
                </div>,
                <div key={1} className="flex flex-col items-center gap-2 mb-3">
                  <FaRegCircle size={24} /> Tem <br /> Varanda
                </div>,
                <div key={1} className="flex flex-col items-center gap-2 mb-3">
                  <FaBusAlt size={24} /> Ônibus <br /> Perto
                </div>,
                <div key={1} className="flex flex-col items-center gap-2 mb-3">
                  <FaRegCircle size={24} /> Tem <br /> Quital
                </div>,
                <div key={1} className="flex flex-col items-center gap-2 mb-3">
                  <FaRegCircle size={24} /> Com Boa <br /> Internet
                </div>,
              ]}
              onGetActiveNavItem={onGetActiveNavItem}
            />

            {activeNavItem === 0 && (
              <ModalContent
                title="Sol que ilumina as suas manhãs"
                description="Busque imóveis que pegam Sol durante a manhã para que você fique com a vitamina D em dia  ;)"
                buttonText="Buscar Imóveis"
              />
            )}
            {activeNavItem === 1 && (
              <ModalContent
                title="Imóveis com Quintal"
                description="perspiciatis unde omnis iste natus erron sit voluptatem accusanti sutan etsi sinmos."
                buttonText="Buscar Imóveis"
              />
            )}
            {activeNavItem === 2 && (
              <ModalContent
                title="Tem Varanda"
                description="Busque imóveis que pegam Sol durante a manhã para que você fique com a vitamina D em dia  ;)"
                buttonText="Buscar Imóveis"
              />
            )}
            {activeNavItem === 3 && (
              <ModalContent
                title="Ônibus Perto"
                description="Busque imóveis que pegam Sol durante a manhã para que você fique com a vitamina D em dia  ;)"
                buttonText="Buscar Imóveis"
              />
            )}
            {activeNavItem === 4 && (
              <ModalContent
                title="Tem Quintal"
                description="Busque imóveis que pegam Sol durante a manhã para que você fique com a vitamina D em dia  ;)"
                buttonText="Buscar Imóveis"
              />
            )}
            {activeNavItem === 5 && (
              <ModalContent
                title="Com Boa Internet"
                description="Busque imóveis que pegam Internet durante a manhã para que você fique com a vitamina D em dia  ;)"
                buttonText="Buscar Imóveis"
              />
            )}
          </div>
        </div>
      </div>
      <Image
        src={Images[activeNavItem].image}
        alt={Images[activeNavItem].alt}
        className="object-cover min-h-[208px] md:hidden"
      />
    </>
  );
};

export default CarouselCardImage;
