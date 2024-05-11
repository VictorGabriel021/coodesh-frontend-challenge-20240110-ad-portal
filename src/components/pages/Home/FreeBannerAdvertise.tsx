import Image from "next/image";

import AdvertiseForFree from "@/assets/img/AdvertiseForFree.png";

import { MdKeyboardArrowRight } from "react-icons/md";

import CustomButton from "../../Button/CustomButton";

const FreeBannerAdvertise = () => {
  return (
    <>
      <div className="flex items-center md:border md:border-solid border-gray-300 rounded-lg overflow-hidden max-w-[1250px] mx-auto flex-wrap-reverse md:flex-nowrap">
        <Image
          src={AdvertiseForFree}
          alt="Advertise For Free"
          className="!h-[330px] sm:!h-[450px] min-w-[285px] object-cover md:w-[50%] lg:w-[100%]"
          layout="responsive"
          height={450}
        />
        <div className="px-5 py-10 min-w-[400px]">
          <p className="text-custom-orange-ED672B text-base font-bold">
            <span className="hidden md:block">Quer Vender ou Alugar?</span>
            <span className="md:hidden">Quer Vender?</span>
          </p>

          <h3 className="text-custom-gray-393B3D text-[1.4em] sm:text-[2em] font-bold mt-5 mb-20">
            Anuncie grátis <br /> para mais de 100 mil <br /> pessoas todos os
            dias.
          </h3>

          <CustomButton>Anunciar Imóvel</CustomButton>

          <div className="mt-7">
            <a
              href="#"
              className="flex gap-2 text-custom-gray-4E5254 font-bold border-b-2 border-custom-gray-4E5254 md:border-none hover:text-custom-orange-E95808 hover:border-custom-orange-E95808 w-[max-content]"
            >
              Saiba quanto vale seu imóvel
              <MdKeyboardArrowRight className="hidden md:block" size={24} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeBannerAdvertise;
