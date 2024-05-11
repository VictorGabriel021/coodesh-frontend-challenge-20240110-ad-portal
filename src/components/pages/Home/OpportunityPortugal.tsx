import Image from "next/image";

import CustomButton from "../../Button/CustomButton";

import Portugal from "@/assets/img/Portugal.png";
import PortugalMobile from "@/assets/img/PortugalMobile.png";

const OpportunityPortugal = () => {
  return (
    <div className="relative rounded-none sm:rounded-xl overflow-hidden min-h-[141px] h-[185px] sm:h-auto mt-28 max-w-[1250px] mx-auto">
      <Image
        src={PortugalMobile}
        alt="Portugal Mobile"
        className="block sm:hidden min-h-[141px] h-[185px] sm:h-auto w-full object-cover"
      />

      <Image
        src={Portugal}
        alt="Portugal"
        className="hidden sm:block min-h-[141px] h-[185px] sm:h-auto w-full object-cover"
      />

      <div className="absolute inset-0 flex flex-row sm:flex-col justify-start sm:justify-center items-center bg-gradient-to-r from-black to-transparent opacity-90 py-6 px-2.5 md:py-12 md:px-14">
        <p className="absolute self-start font-bold text-2xl sm:text-3xl text-white">
          Encontre a oportunidade <br /> Perfeita em Portugal
        </p>
        <div className="self-end">
          <CustomButton color="custom-orange-E95808" isBorderNone>
            Ver imóveis em Portugal
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default OpportunityPortugal;
