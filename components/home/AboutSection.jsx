import Link from "next/link";
import PhotoHighlight from "../PhotoHighlight";
import { Button } from "../ui/button";

const AboutSection = () => {
  return (
    <section
      className="h-full bg-cover bg-bottom bg-right bg-no-repeat relative m-0"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, #EEEEEC, rgba(238, 238, 236, 0) 20%), 
          url("/assets/home/highlight-bg-about-edvania-soares.png")
        `,
      }}
    >
      <div className="container mx-auto" >
        <div className="flex flex-col xl:flex-row items-center justify-between pt-8 pb-0 xl:pb-24">
          <div className="xl:mr-32">
            <PhotoHighlight
              src="/assets/home/sobre-edvania-soares.png"
              alt="Nutricionista Edvânia Soares"
            />
          </div>

          <div className="text-center xl:text-left w-[80vw] xl:w-full text-justify">
            <span className="text-secondary text-md uppercase">
              <h1>Sobre</h1>
            </span>
            <h2 className="text-4xl font-black uppercase mb-4 text-title">
              Edvânia Soares
            </h2>
            <div className="flex flex-col">
              <p>
              Nutricionista há 20 anos e apaixonada por transformar vidas por meio da nutrição. Acredito que saúde vai muito além de dietas e números na balança — é sobre viver com mais energia, felicidade e bem-estar.
              <br/>
              <span className="mt-4 block">
              E é com esse entusiasmo que venho construindo minha trajetória, ajudando milhares de pessoas a alcançarem seus objetivos de forma leve e sustentável.
              </span>
              </p>
            </div>

            <Link
              href="/sobre-mim"
              className="flex flex-col mt-8 xl:flex-row items-center gap-8">
              <Button
                variant="primary"
                size="sm"
                className="uppercase flex items-center gap-2 mb-8"
              >
                <span>
                  Saiba Mais
                </span>
              </Button>
            </Link>

          </div>
        </div>
      </div >
    </section >
  )
}

export default AboutSection;