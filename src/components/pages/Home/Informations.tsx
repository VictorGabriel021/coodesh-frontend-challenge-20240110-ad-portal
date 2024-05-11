import { useState } from "react";

const navigation = [
  "Tipos de Propriedades",
  "Populares para Venda",
  "Populares para Locação",
];

const list = [
  {
    title: "Alugar",
    items: [
      { text: "Apartamentos", href: "#" },
      { text: "Casas", href: "#" },
      { text: "Terrenos", href: "#" },
      { text: "Lojas", href: "#" },
    ],
  },
  {
    title: "Comprar",
    items: [
      { text: "Casas à venda", href: "#" },
      { text: "Imóv. em Condomínios", href: "#" },
      { text: "Comprar terrenos", href: "#" },
      { text: "Lançamentos", href: "#" },
    ],
  },
  {
    title: "Comercial",
    items: [
      { text: "imóveis com escritório", href: "#" },
      { text: "Prédio comercial", href: "#" },
      { text: "Galpão de Armazenamento", href: "#" },
      { text: "Salão de Eventos", href: "#" },
    ],
  },
];

const Informations = () => {
  const [activeNavItem, setActiveNavItem] = useState(0);

  const handleNavItemClick = (index: number) => {
    setActiveNavItem(index);
  };

  return (
    <div className="max-w-[1250px] px-4 m-auto my-[65px] md:mt-[150px] md:mb-[50px]">
      <nav className="overflow-y-hidden">
        <ul className="flex gap-6 border-b-2 border-custom-gray-D0D5D8 h-7 rounded-b-[3px] min-w-[480px]">
          {navigation.map((item, index) => (
            <li
              key={index}
              className={`text-sm ${
                activeNavItem === index
                  ? "text-custom-orange-ED672B border-b-4 border-custom-orange-ED672B -mb-[3px] rounded-b-[3px]"
                  : "text-custom-gray-808587 hover:text-custom-orange-ED672B"
              }`}
            >
              <a href="#" onClick={() => handleNavItemClick(index)}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 mt-8">
        {list.map(({ title, items }, index) => (
          <div key={index}>
            <h6 className="text-custom-gray-555555 text-base font-bold">
              {title}
            </h6>
            <ul className="flex flex-col gap-5 mt-5">
              {items.map(({ text, href }, index) => (
                <li key={index} className="text-sm text-custom-gray-555555">
                  <a href={href} className="hover:text-custom-orange-E95808">
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Informations;
