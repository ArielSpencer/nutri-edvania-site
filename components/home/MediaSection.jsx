import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const MediaSection = () => {
  const mediaAndPartnerships = [
    {
      image: "/assets/medias/como-manter-as-unhas-fortes-e-saudaveis.webp",
      magazine: "/assets/medias/marcas/header-logo-white-mystic.png",
      title: "We Mystic",
      description: "Como manter as unhas fortes e saudáveis.",
    },
    {
      image: "/assets/medias/como-manter-as-unhas-fortes-e-saudaveis.webp",
      magazine: "/assets/medias/marcas/header-logo-white-mystic.png",
      title: "Boa Forma",
      description: "O açúcar pode causar dependência.",
    },
    {
      image: "/assets/medias/como-manter-as-unhas-fortes-e-saudaveis.webp",
      magazine: "/assets/medias/marcas/header-logo-white-mystic.png",
      title: "Portal R7",
      description: "Os problemas de Beber muito café.",
    },
    {
      image: "/assets/medias/como-manter-as-unhas-fortes-e-saudaveis.webp",
      magazine: "/assets/medias/marcas/header-logo-white-mystic.png",
      title: "Domingo Espetacular",
      description: "Conheça os Mitos e Verdades sobre o alho.",
    },
  ];

  return (
    <section className="bg-background-highlight h-full flex flex-col items-center justify-center py-20 gap-8">
      <div className="text-center">
        <h2 className="text-secondary text-md uppercase">
          Midias e Parcerias
        </h2>
        <p className="text-4xl font-black uppercase mb-4">
          Lorem Ipsum
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
        {mediaAndPartnerships.map((mediaAndPartnerships, index) => (
          <div
            key={index}
            className="bg-primary flex flex-col items-center text-center p-0 rounded-[80px_4px] xl:rounded-[80px_4px_20px_4px] mb-8 mx-8 xl:mx-0"
          >
            <Image
              src={mediaAndPartnerships.image}
              alt={mediaAndPartnerships.title}
              priority
              quality={100}
              width={384}
              height={384}
              className="rounded-[80px_4px] xl:rounded-[80px_4px_0px_4px] w-full object-contain"
            />

            <Image
              src={mediaAndPartnerships.magazine}
              alt={mediaAndPartnerships.title}
              priority
              quality={100}
              width={64}
              height={64}
              className="bg-background-highlight rounded-full p-2 mt-[-32px] border-2 border-primary"
            />

            <h3 className="text-xl mb-2 mt-4">{mediaAndPartnerships.title}</h3>
            <p className="w-[64vw] md:w-full h-[8vh] px-0 md:px-4 mb-4">{mediaAndPartnerships.description}</p>

            <Link
              href="/"
              target="_blank"
              className="w-full p-12 xl:p-4"
            >
              <Button
                variant="primary"
                className="text-writing w-full"
              >
                Confira
              </Button>
            </Link>
          </div>
        ))}
      </div>

      <Link href="/">
        <Button>
          Todas as Matérias
        </Button>
      </Link>
    </section>
  )
}

export default MediaSection;