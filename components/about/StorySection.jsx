import PhotoHighlight from "../PhotoHighlight";
import HighlightsPointsSection from "./HighlightsPointsSection";

const StorySection = () => {
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
        <div className="flex flex-col xl:flex-row items-start justify-between pt-8 pb-0 xl:pb-24">
          <div className="xl:mr-28 xl:ml-8 xl:mt-8">
            <PhotoHighlight
              src="/assets/home/sobre-edvania-soares.png"
              alt="Nutricionista Edvânia Soares"
            />
            <HighlightsPointsSection />
          </div>

          <div className="text-center xl:text-left w-[80vw] xl:w-full pt-6 text-justify">
            <span className="text-secondary text-md uppercase">
              <h1>Sobre</h1>
            </span>
            <h2 className="text-4xl text-title font-black uppercase mb-4">
            Edvânia Soares
            </h2>
            <div className="flex flex-col pb-8 gap-2">
              <p>
                Nutricionista há 20 anos e apaixonada por transformar vidas por meio da nutrição. Acredito que saúde vai muito além de dietas e números na balança — é sobre viver com mais energia, felicidade e bem-estar. E é com esse entusiasmo que venho construindo minha trajetória, ajudando milhares de pessoas a alcançarem seus objetivos de forma leve e sustentável.
                
                <span className="mt-4 block">
                  Sou CEO da Estima Nutrição, uma empresa que há 15 anos se dedica a promover saúde com excelência. Nossa clínica já atendeu mais de 180 mil pacientes, sempre com um olhar humanizado e estratégias personalizadas para cada indivíduo. Além do atendimento clínico, atuo como palestrante e mentora, ajudando nutricionistas a estruturarem consultórios de sucesso e a fidelizarem seus pacientes.
                </span>

                <span className="mt-4 block">
                  Tive a honra de apresentar o primeiro reality gastronômico de nutrição da TV brasileira, exibido no canal Woohoo, um projeto inovador que tornou o conhecimento nutricional mais acessível e inspirador para o público.
                </span>

                <span className="mt-4 block">
                  Minha missão vai além do consultório. Levo saúde e bem-estar também para empresas, por meio de palestras e programas personalizados que incentivam hábitos saudáveis no ambiente corporativo. Acredito que investir na qualidade de vida dos colaboradores é um caminho essencial para mais produtividade, disposição e felicidade no dia a dia.
                </span>

                <span className="mt-4 block">
                  Seja na clínica, nas empresas, nas mentorias ou nos eventos, meu propósito é o mesmo: inspirar e transformar, tornando a nutrição uma aliada para uma vida mais leve e saudável.
                </span>
              </p>
            </div>

          </div>
        </div>
      </div >
    </section >
  )
}

export default StorySection;