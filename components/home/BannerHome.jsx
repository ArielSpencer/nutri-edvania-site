"use client";

import { Button } from "@/components/ui/button";
import { HiArrowSmallDown } from "react-icons/hi2";
import PhotoBanner from "@/components/PhotoBanner";

const BannerHome = () => {
  return (
    <section
      className="h-[112vh] xl:h-full bg-cover bg-center bg-no-repeat relative text-primary m-0"
      style={{
        backgroundImage: `url("/assets/home/banner-home-edvania-soares.png")`,
      }}
    >
      <div className="container mx-auto" >
        <div className="flex flex-col xl:flex-row items-center justify-between pt-8 pb-0 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-md uppercase">
              <h1>Nutri Edvânia Soares</h1>
            </span>
            <h2 className="text-xl font-black uppercase mb-2 tracking-widest max-w-[100%] xl:max-w-[90%]">
              Transformando empresas e profissionais
              com <span className="text-accent-hover">nutrição personalizada</span> e <span className="text-accent-hover">bem-estar</span>
            </h2>
            <p className="text-xl font-semibold max-w-[100%] xl:max-w-[80%] mb-8 tracking-wider">
              Nutrição corporativa, consultoria e palestras personalizadas para empresas e nutricionistas.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="default"
                size="sm"
                className="uppercase flex items-center gap-2 hover:bg-button hover:text-accent"
              >
                <span>
                  Agende uma palestra ou consultoria
                </span>
              </Button>
            </div>

            <HiArrowSmallDown
              className="text-button text-[48px] mt-20 animate-bounce"
            />
          </div>

          <div className="order-1 xl:order-none mb-8">
            <PhotoBanner
              src="/assets/home/edvania-soares-banner-photo.png"
              alt="Nutricionista Edvânia Soares"
              width={592}
              height={592}
            />
          </div>

        </div>
      </div >
    </section >
  )
}

export default BannerHome;