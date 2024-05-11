import Image from "next/image";

import RoomImage from "@/assets/img/Room.png";
import { PiSquareHalfLight, PiVideoCameraFill } from "react-icons/pi";
import { MdPhotoCamera } from "react-icons/md";

const NewAnnouncements = () => {
  return (
    <div className="flex flex-col rounded-t-xl">
      <div className="relative inline-block bg-black w-auto rounded-t-xl overflow-hidden">
        <Image src={RoomImage} alt={"Room"} height={200} width={300} />
        <div className="absolute top-3 left-3 rounded-xl flex gap-2 text-custom-purple-652D91 bg-white px-2 py-1">
          <PiVideoCameraFill size={16} />
          <MdPhotoCamera size={16} />
          <PiSquareHalfLight size={16} />
        </div>
      </div>
      <div className="flex flex-col gap-2 p p-6 rounded-b-xl border border-custom-gray-555555">
        <p className="font-bold">Casa à Venda, 113m²</p>
        <p className="text-custom-gray-848484 text-sm">
          Cristiano Moreira Sales, Buritis
        </p>
        <div className="flex gap-3 text-custom-blue-3A3A3A text-sm">
          <p>3 Quartos</p>
          <p>2 Banheiros</p>
          <p>4 Vagas</p>
        </div>
        <div className="flex gap-3 text-xs text-custom-blue-48617E">
          <p>Armário Embutido</p>
          <p>Elevador</p>
        </div>
        <p className="text-xl font-bold text-custom-orange-ED672B">
          R$ 268.000
        </p>
      </div>
    </div>
  );
};

export default NewAnnouncements;
