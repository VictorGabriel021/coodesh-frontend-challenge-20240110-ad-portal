import { StaticImport } from "next/dist/shared/lib/get-img-props";

import Image from "next/image";

interface IReceiveFromStatesProps {
  image: string | StaticImport;
  alt: string;
  title: string;
  items: string[];
}

const ReceiveFromStates = ({
  image,
  alt,
  title,
  items,
}: IReceiveFromStatesProps) => {
  return (
    <div className="flex flex-col">
      <div className="relative inline-block bg-black w-auto rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={alt}
          className="opacity-70"
          height={200}
          width={300}
        />
        <p className="absolute bottom-0 font-bold text-2xl text-white px-4 pb-4">
          {title}
        </p>
      </div>
      <ul className="mt-4">
        {items.map((item) => (
          <li key={item} className="flex items-center">
            <span className="text-custom-orange-E95808 text-3xl mr-2">•</span>
            <p className="text-sm text-custom-gray-808587">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReceiveFromStates;
