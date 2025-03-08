"use client";

import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { SlPhone } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";


const Footer = () => {
  return (
    <footer className="bg-secondary p-8 text-primary">
      <div className="container grid grid-cols-1 md:grid-cols-5 gap-8 pt-8">

        <div className="md:col-span-3 text-background-light">
          <h2 className="text-xl font-bold uppercase mb-4">Nutri Edvânia Soares</h2>
          <p className="mb-4 w-3/5 lg:w-4/5">
          CEO da Estima Nutrição, uma empresa que há 15 anos se dedica a promover saúde com excelência. Nossa clínica já atendeu mais de 180 mil pacientes, sempre com um olhar humanizado e estratégias personalizadas para cada indivíduo.
          <br /><br />
          Além do atendimento clínico, atuo como palestrante e mentora, ajudando nutricionistas a estruturarem consultórios de sucesso e a fidelizarem seus pacientes.
          </p>
          <div className="uppercase text-md font-bold tracking-widest mb-2 flex flex-row items-center space-x-4">
            <h3
              >
              Conheça mais sobre mim:
            </h3>
            <a
              href="https://www.instagram.com/nutriedvaniasoares/"
              target="_blank"
              aria-label="Instagram"
              className="text-xl hover:text-background hover:font-bold"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@NutriEdvaniaSoares"
              target="_blank"
              aria-label="YouTube"
              className="text-xl hover:text-background hover:font-bold"
            >
              <FaYoutube />
            </a>
            <a
              href="https://wa.me/5511997239915"
              target="_blank"
              aria-label="WhatsApp"
              className="text-xl hover:text-background hover:font-bold"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="md:col-span-1">
          <h3 className="text-xl font-bold text-background-light uppercase mb-4">Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/"
                className="hover:text-background-light hover:font-bold"
              >
                Home
              </a>
            </li>
            <li>
              <a href="/sobre-mim"
                className="hover:text-background-light hover:font-bold"
              >
                Sobre
              </a>
            </li>
            <li>
              <a href="/servicos"
                className="hover:text-background-light hover:font-bold"
              >
                Serviços
              </a>
            </li>
            <li>
              <a href="/contato"
                className="hover:text-background-light hover:font-bold"
              >
                Contato
              </a>
            </li>
            <li>
              <a href="/blog"
                className="hover:text-background-light hover:font-bold"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h3 className="text-xl font-bold text-background-light uppercase mb-4">Entre em Contato</h3>
          <div className="flex flex-row items-center gap-2">
            <SlPhone className="font-sm" />
            <a
              href="tel:08005505088"
              target="_blank"
              className="hover:text-background-light hover:font-bold"
            >
              0800 550 5088
            </a>
          </div>
          <div className="flex flex-row items-center gap-2">
            <FaWhatsapp className="font-sm" />
            <a
              href="https://wa.me/5511997239915"
              target="_blank"
              className="hover:text-background-light hover:font-bold"
            >
              11 99723 9915
            </a>
          </div>
          <div className="flex flex-row items-center gap-2">
            <TfiEmail className="font-sm" />
            <a
              href="mailto:edvania@soares.com"
              target="_blank"
              className="hover:text-background-light hover:font-bold"
            >
              edvania@soares.com
            </a>
          </div>
        </div>

      </div>

      <div className="mx-auto border-t border-background-highlight mt-16 mb-8" />

      <div className="text-center text-background-highlight">
        <p className="text-md">
          Todos os direitos reservados © 2025. | Desenvolvido por
          <a href="https://arielspencer.com.br"
            target="_blank"
            className="hover:text-background-light hover:font-bold pl-1"
          >
            Ariel Spencer
          </a>
        </p>
      </div>

    </footer>
  );
};

export default Footer;