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
              <h1>Sobre Edvânia Soares</h1>
            </span>
            <h2 className="text-4xl font-black uppercase mb-4 text-title">
              Nullam sodales to velit vel turpis non velit
            </h2>
            <div className="flex flex-col gap-2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere distinctio placeat quaerat impedit ipsam numquam, accusantium ullam rem! Qui labore quibusdam cupiditate culpa at eum, aliquid minus consectetur saepe excepturi!
              </p>
              <p>
                Nullam sodales velit vel turpis faucibus, accusantium ullam rem! Qui labore quibusdam cupiditate culpa at eum, non sagittis tortor scelerisque.
              </p>

              <p className="border-l-2 border-writing pl-4 mt-4 mb-8 font-bold w-[90%]">
                "Nullam as sodales vel turpis, non sagittis accusantium tortor scelerisque ullam rem at eum vel." - Revista Nutri"
              </p>
            </div>

            <Link
              href="/sobre-mim"
              className="flex flex-col xl:flex-row items-center gap-8">
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