import { useState } from "react";
import Image from "next/image";

import { GoLocation } from "react-icons/go";
import { FaBed } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiSearchAlt } from "react-icons/bi";

import flatsData from "@/assets/db/flats.json";
import placeData from "@/assets/db/place.json";

import homeBanner from "@/assets/img/HomeBanner.png";
import homeBannerMobile from "@/assets/img/HomeBannerMobile.png";

const Search = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [searchLocationSelected, setSearchLocationSelected] = useState("");
  const [searchRoom, setSearchRoom] = useState("");
  const [searchResults, setSearchResults] = useState<Flats[]>([]);
  const [openModalLocation, setOpenModalLocation] = useState(false);
  const [openModalRooms, setOpenModalRooms] = useState(false);

  const handleChangeLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOpenModalLocation(true);
    setSearchLocation(event.target.value);

    const dataLowerCase = event.target.value.toLowerCase();

    const resultsFlats = flatsData.filter(
      (item) =>
        dataLowerCase &&
        (item.City.toLowerCase().includes(dataLowerCase) ||
          item.Title.toLowerCase().includes(dataLowerCase))
    );

    setSearchResults(resultsFlats);
  };

  const onGetStateText = (city: string) => {
    const item = placeData.find(({ name }) => name === city);
    return `${item?.state.name} - ${item?.state.shortname}`;
  };

  const onSelectLocation = (Title: string, City: string) => {
    setSearchLocation(`${Title}, ${City}, ${onGetStateText(City)}`);
    setSearchLocationSelected(Title);
  };

  const onSelectRoom = (room: string) => {
    setSearchRoom(room);
  };

  const onOpenModal = () => {
    setOpenModalRooms(!openModalRooms);

    if (!searchRoom.length) setSearchRoom("Todos Quartos");
  };

  return (
    <div className="relative">
      <Image
        src={homeBannerMobile}
        alt="Home Banner"
        className="block sm:hidden w-full min-h-[256px] object-cover"
      />
      <Image
        src={homeBanner}
        alt="Home Banner"
        className="hidden sm:block w-full min-h-[400px] object-cover"
      />
      <div className="absolute sm:none inset-0 top-[5vh] left-20">
        <p className="block sm:hidden text-white text-4xl font-bold">
          Vende.
          <br />
          Aluga.
          <br />
          Conecta.
        </p>
      </div>
      <div className="none sm:absolute inset-0 flex flex-col items-center justify-center px-5 w-full max-w-[1240px] m-auto">
        <p className="hidden sm:block text-white text-4xl font-bold">
          Vende. Aluga. Conecta.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full max-w-[800px]">
          <div className="bg-white rounded-2xl sm:rounded-none sm:rounded-l-[50px] hover:bg-custom-blue-E3E7EC py-2.5 px-7 mt-9">
            <label className="flex items-center gap-2">
              <GoLocation size={18} /> Localização
            </label>
            <input
              type="text"
              placeholder="Qual é a Localização?"
              className="relative sm:none overflow-hidden whitespace-nowrap truncate"
              value={searchLocation}
              onChange={handleChangeLocation}
              onFocus={() => setOpenModalLocation(false)}
            />
            {searchResults.length > 0 && openModalLocation && (
              <div className="absolute z-10 flex flex-col bg-white rounded-xl h-[200px] mt-5 h-[250px] overflow-x-auto shadow-lg">
                <p className="text-custom-gray-A1A7AA text-sm text-center px-5 pt-5">
                  Busque por cidade, região, bairro ou código
                </p>
                <div className="flex flex-col gap-5 mt-5">
                  {searchResults.map(({ Title, City }, index) => (
                    <div
                      key={index}
                      className={`flex gap-2 cursor-pointer ${
                        searchLocationSelected === Title &&
                        "bg-custom-blue-E3E7EC"
                      } hover:bg-custom-blue-E3E7EC p-5`}
                      onClick={() => onSelectLocation(Title, City)}
                    >
                      <FaLocationDot color="#8f8d8d" size={18} />
                      <div>
                        <p className="text-custom-gray-393B3D text-sm">
                          {Title}
                        </p>
                        <p className="text-custom-gray-4E5254 text-xs">
                          {City}, {onGetStateText(City)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="bg-white rounded-2xl sm:rounded-none sm:rounded-r-[50px] justify-start flex sm:justify-end items-center hover:bg-custom-blue-E3E7EC py-2.5 px-7 mt-9">
            <div>
              <label className="flex items-center gap-2">
                <FaBed size={18} /> Nº de Quartos
              </label>
              <input
                type="type"
                readOnly
                placeholder="Quantos Quartos?"
                className="relative sm:none cursor-pointer"
                value={searchRoom}
                onClick={onOpenModal}
              />
              {openModalRooms && (
                <div className="absolute z-10 flex flex-col bg-white rounded-xl h-[200px] w-[250px] lg:w-auto mt-5 h-[250px] p-5 shadow-lg">
                  <p className="text-sm text-custom-gray-393B3D mb-3">
                    Número de Quartos
                  </p>
                  <div className="flex gap-4 border-b-2 border-custom-gray-D0D5D8 pb-5 overflow-y-auto">
                    {["Todos", "1+", "2+", "3+", "4+"].map((item, index) => (
                      <p
                        key={index}
                        onClick={() => onSelectRoom(`${item} Quartos`)}
                        className={`font-bold rounded-full px-3 py-2.5 border-2 border-custom-gray-555555 ${
                          searchRoom === `${item} Quartos` &&
                          "custom-blue-E3E7EC text-custom-purple-652D91 border-custom-purple-652D91"
                        } hover-bg-custom-blue-E3E7EC hover:text-custom-purple-652D91 hover:border-custom-purple-652D91 cursor-pointer`}
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                  <div className="mt-8">
                    <p className="text-sm text-custom-gray-393B3D">
                      Tipo de Propriedade
                    </p>
                    <select name="propertyType" id="propertyType">
                      <option value="all">Todos os tipos</option>
                      <option value="house">Casa</option>
                      <option value="apartment">Apartamento</option>
                      <option value="condo">Condomínio</option>
                      <option value="land">Terreno</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
            <div className="hidden sm:block bg-custom-orange-F36C21 hover:bg-custom-orange-E95808 cursor-pointer rounded-full p-4">
              <div className="flex flex-row items-center gap-2">
                <BiSearchAlt color="white" size={24} />
                {searchLocation.length > 0 && (
                  <p className="text-white font-bold">Buscar</p>
                )}
              </div>
            </div>
          </div>
          <div className="block sm:hidden mt-5">
            <button className="flex items-center w-full justify-center text-white bg-custom-orange-F36C21 hover:bg-custom-orange-E95808 cursor-pointer rounded-lg py-2 px-4">
              <BiSearchAlt color="white" size={24} /> Buscar Imóveis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
