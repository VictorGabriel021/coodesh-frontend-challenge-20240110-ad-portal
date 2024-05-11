import React, { ReactNode, useRef, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface INavOptionsWithArrowsProps {
  navigation: string[] | ReactNode[];
  onGetActiveNavItem?: (value: number) => void;
}

const NavOptionsWithArrows = ({
  navigation,
  onGetActiveNavItem,
}: INavOptionsWithArrowsProps) => {
  const [activeNavItem, setActiveNavItem] = useState(0);
  const containerRef = useRef<HTMLUListElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft + container.offsetWidth < container.scrollWidth
      );
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      const container = containerRef.current;

      container.scrollTo({
        left: container.scrollLeft + container.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScrollLeft = () => {
    if (containerRef.current) {
      const container = containerRef.current;

      container.scrollTo({
        left: container.scrollLeft - container.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handleNavItemClick = (index: number) => {
    setActiveNavItem(index);

    if (onGetActiveNavItem) onGetActiveNavItem(index);
  };

  return (
    <nav className="overflow-hidden">
      <div className="">
        {showLeftArrow && (
          <MdKeyboardArrowLeft
            className="absolute mt-6"
            size={32}
            onClick={handleScrollLeft}
          />
        )}

        {showRightArrow && (
          <MdKeyboardArrowRight
            className="absolute right-0 mt-6"
            size={32}
            onClick={handleScrollRight}
          />
        )}
        <ul
          ref={containerRef}
          className="flex items-center text-center rounded-b-[3px] overflow-x-auto"
          onScroll={handleScroll}
        >
          {navigation.map((item, index) => (
            <li
              key={index}
              className={`text-sm flex-shrink-0 w-1/3 ${
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
      </div>
    </nav>
  );
};

export default NavOptionsWithArrows;
