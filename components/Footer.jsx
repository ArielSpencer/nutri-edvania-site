"use client";

import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { SlPhone } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";


const Footer = () => {
  return (
    <footer className="bg-secondary p-8 text-primary">
      <div className="container grid grid-cols-1 md:grid-cols-5 gap-8 pt-8">

        <div className="md:col-span-3">
          <h2 className="text-xl font-bold text-background-light uppercase mb-4">Nutri Edvânia Soares</h2>
          <p className="mb-4 w-3/5 lg:w-4/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut obcaecati, ex animi asperiores. Quasi expedita officiis eos, illo alias iure.
          </p>
          <div className="text-2xl flex space-x-4 text-button">
            <a
              href="https://www.instagram.com/nutriedvaniasoares/"
              target="_blank"
              aria-label="Instagram"
              className="hover:text-background-light"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@NutriEdvaniaSoares"
              target="_blank"
              aria-label="YouTube"
              className="hover:text-background-light"
            >
              <FaYoutube />
            </a>
            <a
              href="https://wa.me/5511997239915"
              target="_blank"
              aria-label="WhatsApp"
              className="hover:text-background-light"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="md:col-span-1">
          <h3 className="text-xl font-bold text-background-light uppercase mb-4">Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#"
                className="hover:text-background-light hover:font-bold"
              >
                Home
              </a>
            </li>
            <li>
              <a href="#"
                className="hover:text-background-light hover:font-bold"
              >
                Sobre
              </a>
            </li>
            <li>
              <a href="#"
                className="hover:text-background-light hover:font-bold"
              >
                Serviços
              </a>
            </li>
            <li>
              <a href="#"
                className="hover:text-background-light hover:font-bold"
              >
                Contato
              </a>
            </li>
            <li>
              <a href="#"
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