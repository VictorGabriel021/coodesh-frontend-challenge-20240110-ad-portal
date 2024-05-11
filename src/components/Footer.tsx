import Image from "next/image";

import Logo from "@/assets/img/LogoFooter.png";
import InstagramIcon from "@/assets/img/InstagramIcon.png";
import FacebookIcon from "@/assets/img/FacebookIcon.png";
import LinkedinIcon from "@/assets/img/LinkedinIcon.png";
import YoutubeIcon from "@/assets/img/YoutubeIcon.png";

const Footer = () => {
  return (
    <div className="bg-custom-orange-F36C21 text-center">
      <div className="max-w-[1250px] m-auto flex flex-col lg:flex-row gap-9 items-center justify-between p-5">
        <Image src={Logo} alt="Netimóveis" height={38} />
        <div className="text-xs text-white">
          <p className="mb-5 sm:mb-0">
            © Copyright 2021 Netimóveis Brasil SA. Todos os direitos reservados.
          </p>
          <ul className="flex flex-col sm:flex-row gap-6">
            <li>
              <a href="#" className="hover:text-custom-blue-1C2A39">
                Política de privacidade
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-custom-blue-1C2A39">
                Termos de uso
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-custom-blue-1C2A39">
                LGPD
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-custom-blue-1C2A39">
                Versão: 25/10/2021
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-8">
          <a href="#" className="hover:opacity-60">
            <Image src={InstagramIcon} alt="InstagramIcon" height={32} />
          </a>
          <a href="#" className="hover:opacity-60">
            <Image src={FacebookIcon} alt="FacebookIcon" height={32} />
          </a>
          <a href="#" className="hover:opacity-60">
            <Image src={LinkedinIcon} alt="LinkedinIcon" height={32} />
          </a>
          <a href="#" className="hover:opacity-60">
            <Image src={YoutubeIcon} alt="YoutubeIcon" height={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
