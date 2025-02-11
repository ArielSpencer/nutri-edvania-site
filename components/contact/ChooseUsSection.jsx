"use client";

import Image from "next/image";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Button } from "../ui/button";

const ChooseUsSection = () => {
  const currentChoose = {
    title: "Invista na Saúde da sua Empresa!",
    image: "/assets/services/edvania-soares.png",
    url: "https://example.com/ebook-lancheira-saudavel",
    highlights: [
      { title: "Lorem Ipsum 1", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
      { title: "Lorem Ipsum 2", description: "Deleniti eligendi molestias aliquam sint recusandae pariatur." },
      { title: "Lorem Ipsum 3", description: "Porro ipsum incidunt molestiae corporis accusantium, dicta." },
      { title: "Lorem Ipsum 4", description: "Nullam sodales velit vel sagittis torod dicta iusto suscipit." },
      { title: "Lorem Ipsum 5", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
      { title: "Lorem Ipsum 6", description: "Deleniti eligendi molestias aliquam sint recusandae pariatur." },
      { title: "Lorem Ipsum 7", description: "Porro ipsum incidunt molestiae corporis accusantium, dicta." },
      { title: "Lorem Ipsum 8", description: "Nullam sodales velit vel sagittis torod dicta iusto suscipit fugit." },
    ],
  };

  return (
    <section className="flex flex-col items-center text-center p-16 bg-background text-primary">

      <div className="mb-12 uppercase">
        <p className="text-secondary font-semibold">Porque nos escolher?</p>
        <h2 className="text-3xl text-title font-bold">{currentChoose.title}</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-30 lg:gap-20 xl:gap-0 items-center w-full xl:w-[80vw]">

        <div className="grid grid-cols-1 gap-4 col-span-3 lg:col-span-1">
          {currentChoose.highlights.slice(0, 4).map((highlight, index) => (
            <div
              key={index}
              className={`grid grid-cols-1`}
            >
              <div className={`flex items-center justify-end space-x-2 ${index == 0 || index == 3 ? 'mr-[-64px]' : 'mr-0'}`}>
                <div className={`flex flex-col text-right pr-4`}>
                  <h3 className="text-md font-bold text-secondary">{highlight.title}</h3>
                  <p className="text-sm text-writing text-secondary w-[192px]">{highlight.description}</p>
                </div>
                <div className="text-4xl bg-[#FADDCC] rounded-full p-2 flex items-center justify-center">
                  <IoMdCheckmarkCircleOutline className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative flex justify-center col-span-3 lg:col-span-1">
          <div className="relative w-full h-full">

            <div className="absolute inset-0 flex items-center justify-center">

              <div className="absolute w-[300px] h-[370px] rounded-full border-[20px] border-[#FCEFE7]">
                <div className="absolute inset-0 rounded-full border-[20px] border-[#FADDCC] bg-[#FADDCC]">
                  <div className="relative w-full h-full">
                    <Image
                      src={currentChoose.image}
                      alt={currentChoose.title}
                      width={300}
                      height={350}
                      className="object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 col-span-3 lg:col-span-1">
          {currentChoose.highlights.slice(4, 8).map((highlight, index) => (
            <div
              key={index}
              className={`grid grid-cols-1`}
            >
              <div className={`flex items-center space-x-2 ${index == 1 || index == 2 ? 'ml-0' : 'ml-[-64px]'}`}>
                <div className="text-4xl bg-[#FADDCC] rounded-full p-2 flex items-center justify-center">
                  <IoMdCheckmarkCircleOutline className="text-white" />
                </div>

                <div className={`flex flex-col text-left pl-4`}>
                  <h3 className="text-md font-bold text-secondary">{highlight.title}</h3>
                  <p className="text-sm text-writing text-secondary w-[192px]">{highlight.description}</p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      <Link href="/">
        <Button
          size="lg"
          className="mt-12"
        >
          Entre em Contato
        </Button>
      </Link>

    </section>
  );
};

export default ChooseUsSection;