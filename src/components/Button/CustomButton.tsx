import { ReactNode } from "react";

interface ICustomButtonProps {
  children: ReactNode;
  color?: string;
  isBorderNone?: boolean;
}

const CustomButton = ({
  children,
  color = "custom-purple-652D91",
  isBorderNone = false,
}: ICustomButtonProps) => {
  const border = isBorderNone ? "" : `border border-${color}`;

  return (
    <button
      className={`text-${color} ${border} font-bold hover:text-white bg-white hover:bg-${color} rounded-lg py-2 px-4`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
