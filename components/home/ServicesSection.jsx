"use client";

import { HiArrowUpRight } from "react-icons/hi2";
import { Button } from "../ui/button";
import PhotoSections from "../PhotoSections";

const ServicesSection = () => {
  const services = [
    {
      image: "/assets/services/edvania-palestra.png",
      title: "Serviço 1",
      description: "Nullam sodales velit vel turpis faucibus, non sagittis.",
    },
    {
      image: "/assets/services/edvania-palestra.png",
      title: "Serviço 2",
      description: "Nullam sodales velit vel turpis faucibus, non sagittis.",
    },
    {
      image: "/assets/services/edvania-palestra.png",
      title: "Serviço 3",
      description: "Nullam sodales velit vel turpis faucibus, non sagittis.",
    },
    {
      image: "/assets/services/edvania-palestra.png",
      title: "Serviço 4",
      description: "Nullam sodales velit vel turpis faucibus, non sagittis.",
    },
  ];

  return (
    <section className="bg-background-light text-primary text-writing flex flex-col justify-center items-center py-16">
      <div className="container w-[50vw] text-center mx-auto mb-8">
        <h2 className="text-xl text-secondary uppercase mb-4">Serviços</h2>
        <p className="text-2xl font-bold">
          Soluções estratégicas em nutrição para impulsionar empresas e capacitar profissionais com praticidade e resultados reais.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-8"
          >
            <PhotoSections
              src={service.image}
              alt={service.title}
            // className="mb-0"
            />

            <h3 className="text-xl mb-2 mt-4">{service.title}</h3>
            <p className="mb-4 w-[50vw] md:w-full">{service.description}</p>

            <a
              href="/"
              target="_blank"
              className="flex flex-row justify-center md:justify-between gap-4 w-full px-2 group items-center"
            >
              <Button
                variant="primary"
                size="icon"
                className="text-writing hover:bg-button group-hover:scale-110 transition-transform duration-200"
              >
                <HiArrowUpRight />
              </Button>
              <h4
                className="text-lg font-bold md:pr-8 group-hover:text-secondary transition-colors duration-200"
              >
                Saiba mais
              </h4>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;