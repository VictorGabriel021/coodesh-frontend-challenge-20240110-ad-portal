import NewAnnouncements from "./NewAnnouncements";

import EmblaCarousel from "@/components/Carousel/EmbraCarousel";

import { IoIosArrowDown } from "react-icons/io";
import { BsBoxArrowUpRight } from "react-icons/bs";

const NewAnnouncementsList = () => {
  return (
    <div className="p-5 py-20 max-w-[1250px] mx-auto">
      <EmblaCarousel
        slides={[0, 1, 2, 3, 4, 5, 6].map((_, index) => (
          <NewAnnouncements key={index} />
        ))}
        title={
          <div>
            <h2 className="flex flex-col sm:flex-row gap-1 mb-4 text-base sm:text-2xl font-bold">
              Novos Anúncios em{" "}
              <span className="text-custom-orange-E95808 flex items-center gap-1">
                Belo Horizonte{" "}
                <IoIosArrowDown
                  size={18}
                  className="text-custom-orange-E95808"
                />
              </span>
            </h2>
            <a
              href="#"
              className="flex flex-row items-center gap-2 text-custom-blue-2362AF hover:opacity-80"
            >
              Ver todos os imóveis <BsBoxArrowUpRight size={18} />
            </a>
          </div>
        }
        options={{ loop: true }}
      />
    </div>
  );
};

export default NewAnnouncementsList;
