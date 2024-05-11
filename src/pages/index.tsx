import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  FreeBannerAdvertise,
  ReceiveFromStatesList,
  OpportunityPortugal,
  HereACatchphrase,
  ForBuyersSellersCurious,
  BannerNetimoveis,
  ListBuyCommercialRent,
  Informations,
  FindAPlace,
  CarouselCardImage,
  NewAnnouncementsList,
  Search,
} from "@/components/pages/Home/index";

const Home = () => {
  return (
    <div className="max-w-[1440px] m-auto">
      <Navbar />
      <div className="mt-[4em]">
        <Search />
        <NewAnnouncementsList />
        <FindAPlace />
        <CarouselCardImage />
        <FreeBannerAdvertise />
        <ReceiveFromStatesList />
        <OpportunityPortugal />
        <HereACatchphrase />
        <ForBuyersSellersCurious />
        <BannerNetimoveis />
        <Informations />
        <ListBuyCommercialRent />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
