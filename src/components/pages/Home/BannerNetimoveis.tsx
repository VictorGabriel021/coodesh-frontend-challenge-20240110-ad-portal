import Image from "next/image";

import BeAPartOfIt from "@/assets/img/BeAPartOfIt.png";

import CustomButton from "../../Button/CustomButton";

const BannerNetimoveis = () => {
  return (
    <div className="lg:rounded-xl overflow-hidden flex flex-col lg:flex-row mt-[78px] lg:mt-32 max-w-[1250px] mx-auto">
      <div className="flex-1 bg-custom-blue-1C2A39 px-5 py-8 sm:py-9 sm:px-14">
        <button className="text-white border border-custom-orange-E95808 hover:bg-custom-orange-E95808 text-sm rounded-2xl py-1 px-4">
          Para Empresas
        </button>

        <h2 className="text-2xl sm:text-4xl font-bold text-custom-white-F7F9FA my-8">
          Faça parte da Netimóveis
        </h2>
        <p className="text-xl	text-custom-gray-C0C7CA">
          É uma empresa ou rede de imobiliárias? Associe-se e <br /> alcance um
          próximo patamar de eficiência e tecnologia.
        </p>

        <div className="flex items-center gap-5 sm:gap-12 flex-wrap">
          <CustomButton color="custom-orange-E95808 my-8" isBorderNone>
            Mais Sobre se Associar
          </CustomButton>
          <a
            href="#"
            className="h-full text-white text-sm border-b-2 border-custom-gray-A1A7AA hover:text-custom-orange-E95808 hover:border-custom-orange-E95808"
          >
            Conheça Nossos Produtos
          </a>
        </div>
      </div>
      <Image
        src={BeAPartOfIt}
        alt="BeAPartOfIt"
        className="w-auto lg:w-[25%] xl:w-[40%] h-[100vw] mt-[35vw] lg:h-auto lg:mt-0 transform rotate-90 lg:rotate-0 object-cover overflow-visible"
      />
    </div>
  );
};

export default BannerNetimoveis;
