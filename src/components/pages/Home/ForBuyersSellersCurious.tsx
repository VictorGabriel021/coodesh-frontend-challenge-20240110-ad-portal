import Image from "next/image";

import Lecture from "@/assets/img/Lecture.png";
import FinancialOrganization from "@/assets/img/FinancialOrganization.png";
import Maintenance from "@/assets/img/Maintenance.png";

import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";

const list = [
  {
    image: Lecture,
    time: "2 Min de Leitura",
    category: "Mundo Netimóveis",
    text: "ENCONTRO NETIMÓVEIS BRASIL – N CONNECTIONS 2021: A FORÇA DOS NEGÓCIOS EM REDE",
  },
  {
    image: FinancialOrganization,
    time: "3 Min de Leitura",
    category: "Finanças",
    text: "ORGANIZAÇÃO FINANCEIRA NAS IMOBILIÁRIAS",
  },
  {
    image: Maintenance,
    time: "4 Min de Leitura",
    category: "Sucesso Profissional",
    text: "EFICIÊNCIA NA GESTÃO DE CHAMADOS DE MANUTENÇÃO",
  },
];

const ForBuyersSellersCurious = () => {
  return (
    <div className="max-w-[1250px] px-4 m-auto mt-24">
      <div className="flex justify-between items-start lg:items-center flex-col lg:flex-row mb-11">
        <h2 className="text-xl sm:text-3xl font-bold text-custom-gray-393B3D mb-5 lg:mb-0">
          Para compradores, vendedores ou curiosos :)
        </h2>
        <div className="w-[160px]">
          <a
            href="#"
            className="flex gap-1.5 font-bold text-custom-blue-2362AF lg:text-custom-gray-4E5254 hover:opacity-80"
          >
            Ver mais no Blog <MdKeyboardArrowRight size={24} />
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
        {list.map(({ text, category, image, time }, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={image}
              alt={text}
              className="rounded-xl w-full"
              height={250}
              width={385}
            />
            <div className="flex items-center flex-wrap gap-1 text-custom-gray-848484 w-full my-5">
              <MdOutlineWatchLater size={18} />
              <p className="mr-2">{time}</p>
              <p className="text-custom-orange-E95808">{category}</p>
            </div>
            <h2 className="text-custom-gray-3A3A3A text-2xl font-bold">
              {text}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForBuyersSellersCurious;
