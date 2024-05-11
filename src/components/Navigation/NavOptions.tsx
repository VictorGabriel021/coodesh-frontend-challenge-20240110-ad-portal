import { ReactNode, useState } from "react";

interface INavOptionsProps {
  navigation: string[] | ReactNode[];
  onGetActiveNavItem?: (value: number) => void;
}

const NavOptions = ({ navigation, onGetActiveNavItem }: INavOptionsProps) => {
  const [activeNavItem, setActiveNavItem] = useState(0);

  const handleNavItemClick = (index: number) => {
    setActiveNavItem(index);

    if (onGetActiveNavItem) onGetActiveNavItem(index);
  };

  return (
    <nav className="overflow-y-hidden">
      <ul className="grid grid-cols-3 items-center text-center rounded-b-[3px] min-w-[480px]">
        {navigation.map((item, index) => (
          <li
            key={index}
            className={`text-sm ${
              activeNavItem === index
                ? "border-b-4 border-custom-orange-ED672B text-custom-gray-4E5254 font-bold"
                : "border-b-2 border-custom-gray-D0D5D8 text-custom-gray-808587 font-bold hover:text-custom-gray-4E5254"
            }`}
          >
            <a href="#" onClick={() => handleNavItemClick(index)}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavOptions;
