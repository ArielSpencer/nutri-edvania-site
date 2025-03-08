"use client";

import { HiArrowUpRight } from "react-icons/hi2";
import { Button } from "../ui/button";
import PhotoSections from "../PhotoSections";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ServicesSection = () => {
  const services = [
    {
      image: "/assets/services/edvania-palestra.png",
      title: "Atendimento Nutricional Personalizado",
      link: "/servicos/atendimento-nutricional",
    },
    {
      image: "/assets/services/edvania-palestra.png",
      title: "Palestras e Programas de Saúde para Empresas",
      link: "/servicos/palestras-e-programas-de-saude",
    },
    {
      image: "/assets/services/edvania-palestra.png",
      title: "Programas de Saúde e Bem-Estar",
      link: "//servicosprogramas-de-saude-e-bem-estar",
    },
    {
      image: "/assets/services/edvania-palestra.png",
      title: "Mentoria para Nutricionistas",
      link: "/servicos/mentoria-para-nutricionistas",
    },
    {
      image: "/assets/services/edvania-palestra.png",
      title: "E-books e Materiais Educativos",
      link: "/e-books",
    },
  ];

  return (
    <section className="bg-background-light text-title flex flex-col justify-center items-center py-16">
      <div className="container w-[50vw] text-center mx-auto mb-8">
        <h2 className="text-xl text-secondary uppercase mb-4">Serviços</h2>
        <p className="text-2xl font-bold text-title">
          Soluções estratégicas em nutrição para impulsionar empresas e capacitar profissionais com praticidade e resultados reais.
        </p>
      </div>

      <div className="container mx-auto w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="w-full"
        >

          <style jsx global>{`
          .swiper-button-next::after,
          .swiper-button-prev::after {
            color: #3B7644;
            padding-bottom: 3em;
          }

          .swiper-button-next:hover::after,
          .swiper-button-prev:hover::after {
            color: #E2CBAC;
          }

          .swiper-pagination-bullet {
            background: #3B7644;
          }

          .swiper-pagination-bullet-active {
            background: #3B7644;
          }

          .swiper-pagination-bullet:hover {
            background: #E2CBAC;
            opacity: 1;
          }
        `}</style>

          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center mt-4 mb-16">
                <PhotoSections src={service.image} alt={service.title} />
                <h3 className="text-xl w-[60%] h-[84px] mt-8">{service.title}</h3>
                <a
                  href={service.link}
                  className="flex flex-row justify-center gap-4 w-full px-2 group items-center cursor-pointer"
                >
                  <h4 className="text-lg font-bold group-hover:text-secondary transition-colors duration-200 uppercase">
                    Saiba mais
                  </h4>

                  <Button
                    variant="primary"
                    size="icon"
                    className="text-primary group-hover:bg-secondary group-hover:scale-105 transition-transform duration-200"
                  >
                    <HiArrowUpRight />
                  </Button>

                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ServicesSection;