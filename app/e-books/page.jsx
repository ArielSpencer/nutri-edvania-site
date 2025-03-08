import Banner from "@/components/Banner";
import EbookSection from "@/components/home/EbookSection";

const Ebooks = () => {
  return <section>
    <Banner
      title="E-books por Edvânia Soares"
      description="Conteúdos práticos e personalizados para transformar sua alimentação e saúde, com dicas valiosas e estratégias fáceis de aplicar no seu dia a dia."
    />
    {/* <EbookSection /> */}

    <div className="min-h-screen flex flex-col justify-center items-center px-36">
      <h1
          className="text-4xl font-bold text-center text-accent mb-8"
      >
        E-books e Materiais Educativos
      </h1>
      <p>
        Produzo e-books e materiais exclusivos, sempre direcionados para diferentes necessidades e objetivos. Seja para quem busca receitas práticas, estratégias para emagrecimento, nutrição funcional ou longevidade, cada conteúdo é pensado para oferecer soluções aplicáveis no dia a dia.
      </p>
      <p>
        Meu objetivo é tornar a alimentação mais equilibrada, prazerosa e acessível, trazendo informações claras e aplicáveis para que você possa colocar em prática e transformar sua rotina com mais saúde e bem-estar.
      </p>
    </div>
  </section>
}

export default Ebooks;