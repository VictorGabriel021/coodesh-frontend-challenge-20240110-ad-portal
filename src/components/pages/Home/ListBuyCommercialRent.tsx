import Image from "next/image";

import GooglePlayBadge from "@/assets/img/GooglePlayBadge.png";
import AppStoreButton from "@/assets/img/AppStoreButton.png";

const list = [
  {
    title: "A Netimóveis",
    items: [
      { name: "Quem somos", href: "#" },
      { name: "Como funciona", href: "#" },
      { name: "Seja um parceiro", href: "#" },
      { name: "Quero me associar", href: "#" },
      { name: "Acessoria de imprensa", href: "#" },
      { name: "Soluções Corporativas", href: "#" },
      { name: "Covid-19", href: "#" },
    ],
  },
  {
    title: "Recursos",
    items: [
      { name: "Comprar", href: "#" },
      { name: "Alugar", href: "#" },
      { name: "Lançamentos", href: "#" },
      { name: "Anunciar Imóvel", href: "#" },
      { name: "Simular Financiamento", href: "#" },
      { name: "Imobiliárias", href: "#" },
      { name: "Blog", href: "#" },
    ],
  },
  {
    title: "Contato",
    items: [
      { name: "Fale Conosco", href: "#" },
      { name: "Perguntas Frequentes", href: "#" },
      { name: "Suporte", href: "#" },
    ],
  },
  {
    title: "Nossos Aplicativos",
    items: [
      { name: "Loc Fácil Netimóveis", href: "#" },
      { name: "Pro Imob Netimóveis", href: "#" },
    ],
  },
];

const ListBuyCommercialRent = () => {
  return (
    <div className="bg-custom-blue-E3E7EC">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 mt-8 max-w-[1250px] px-4 py-9 m-auto">
        {list.map((listItem, index) => (
          <div key={index}>
            <h6 className="text-custom-blue-063D7E font-bold">
              {listItem.title}
            </h6>
            <ul className="flex flex-col gap-5 mt-5">
              {listItem.items.map((obj) => (
                <li key={obj.name} className="text-sm text-custom-gray-555555">
                  <a href="#" className="hover:text-custom-orange-E95808">
                    {obj.name}
                  </a>
                </li>
              ))}
              {list.length === index + 1 && (
                <li className="text-sm text-custom-gray-555555">
                  <div className="flex gap-1">
                    <a href="#" className="hover:opacity-80">
                      <Image
                        src={AppStoreButton}
                        alt="AppStore Button"
                        height={28}
                      />
                    </a>
                    <a href="#" className="hover:opacity-80">
                      <Image
                        src={GooglePlayBadge}
                        alt="GooglePlay Badge"
                        height={28}
                      />
                    </a>
                  </div>
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListBuyCommercialRent;
