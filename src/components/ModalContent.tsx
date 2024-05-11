import { ReactNode } from "react";

import CustomButton from "@/components/Button/CustomButton";

interface IRentPropertyProps {
  title: string;
  description: string;
  buttonText: string;
  children?: ReactNode;
}

const ModalContent = ({
  title,
  description,
  buttonText,
  children,
}: IRentPropertyProps) => {
  return (
    <>
      <h2 className="text-custom-gray-393B3D text-2xl sm:text-4xl font-bold mt-12">
        {title}
      </h2>
      <p className="text-custom-gray-808587 mt-5 mb-9">{description}</p>
      <div className="w-[max-content] mb-5">
        <CustomButton>{buttonText}</CustomButton>
      </div>

      {children}
    </>
  );
};

export default ModalContent;
