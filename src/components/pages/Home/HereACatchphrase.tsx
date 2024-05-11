import Image from "next/image";

import Presentation from "@/assets/img/Presentation.png";

const HereACatchphrase = () => {
  return (
    <div className="flex flex-col 2xl:flex-row mt-28">
      <div className="relative flex-1">
        <Image
          src={Presentation}
          alt="Presentation"
          className="w-full h-auto 2xl:h-full"
        />
      </div>
      <div className="flex-1 bg-custom-white-F1F4F6 px-4 py-8 sm:px-24 sm:py-14">
        <h2 className="text-custom-gray-A1A7AA text-xl sm:text-2xl font-bold mb-10 ml-0 sm:ml-8">
          Aqui vai uma frase de efeito
        </h2>

        <div className="flex flex-col gap-14">
          <div className="sm:flex">
            <span className="bg-custom-gray-A1A7AA self-start min-h-6 min-w-6 py-[3px] px-[12px] rounded-xl mr-5" />
            <div>
              <p className="text-custom-gray-4E5254 text-base font-bold mb-4 mt-4 sm:mt-0">
                Motivo para negociar com a Netimóveis
              </p>
              <p className="text-custom-gray-4E5254 text-sm">
                Aqui é desenvolvido esse motivo para negociar com a Netimóveis.
                <br />
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
              </p>
            </div>
          </div>
          <div className="sm:flex">
            <span className="bg-custom-gray-A1A7AA self-start min-h-6 min-w-6 py-[3px] px-[12px] rounded-xl mr-5" />
            <div>
              <p className="text-custom-gray-4E5254 text-base font-bold mb-4 mt-4 sm:mt-0">
                Motivo para negociar com a Netimóveis
              </p>
              <p className="text-custom-gray-4E5254 text-sm">
                Aqui é desenvolvido esse motivo para negociar com a Netimóveis.
                <br />
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
              </p>
            </div>
          </div>
          <div className="sm:flex">
            <span className="bg-custom-gray-A1A7AA self-start min-h-6 min-w-6 py-[3px] px-[12px] rounded-xl mr-5" />
            <div>
              <p className="text-custom-gray-4E5254 text-base font-bold mb-4 mt-4 sm:mt-0">
                Motivo para negociar com a Netimóveis
              </p>
              <p className="text-custom-gray-4E5254 text-sm">
                Aqui é desenvolvido esse motivo para negociar com a Netimóveis.
                <br />
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HereACatchphrase;
