import ReceiveFromStates from "./ReceiveFromStates";

import EmblaCarousel from "@/components/Carousel/EmbraCarousel";

import { statesData } from "@/utils/data/states";

const ReceiveFromStatesList = () => {
  return (
    <div className="mt-28 p-5 max-w-[1250px] mx-auto">
      <EmblaCarousel
        slides={statesData.map(({ image, alt, id, items, title }) => (
          <ReceiveFromStates
            key={id}
            image={image}
            alt={alt}
            title={title}
            items={items}
          />
        ))}
        title={
          <h2 className="text-base sm:text-3xl font-bold text-custom-gray-393B3D">
            Prontos para te Receber em mais de 10 estados
          </h2>
        }
        options={{ loop: true }}
        isHiddenDots
      />
    </div>
  );
};

export default ReceiveFromStatesList;
