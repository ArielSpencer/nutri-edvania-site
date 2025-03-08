import Image from "next/image";
import MissionPhoto from "@/public/assets/home/sobre-edvania-soares.png";
import ValuePhoto from "@/public/assets/home/sobre-edvania-soares.png";

const MissionValuesSection = () => {
  return (
    <section className="container flex flex-col mx-auto py-16 gap-16">

      <div className="flex flex-col md:flex-row items-center bg-background-light p-8 shadow-md rounded-[256px_16px]">
        <div className="md:w-1/2 p-16">
          <h2 className="text-3xl font-bold text-title mb-4 uppercase">Missão</h2>
          <p className="text-writing text-lg mb-6">
            Minha missão é ajudar cada pessoa a conquistar uma relação saudável com a alimentação, respeitando sua individualidade e promovendo mudanças reais e duradouras. Seja no consultório, nas empresas, nas palestras ou mentorias, meu objetivo é levar conhecimento, motivação e estratégias práticas para que mais pessoas possam viver com mais saúde, disposição e realização.
          <br /><br />
            Também atuo no desenvolvimento de nutricionistas, oferecendo mentorias e treinamentos para que possam crescer profissionalmente, estruturar seus consultórios e fidelizar pacientes com excelência.
          </p>
        </div>

        <div className="md:w-1/2 relative">
          <div className="overflow-hidden rounded-[230px_8px]">
            <Image src={MissionPhoto} alt="Missão Edvânia" className="object-cover w-full h-full" />
          </div>
        </div>
      </div >

      <div className="flex flex-col md:flex-row items-center bg-background-light p-8 shadow-md rounded-[256px_16px]">
        <div className="md:w-1/2 relative">
          <div className="overflow-hidden rounded-[230px_8px]">
            <Image src={ValuePhoto} alt="Valores Edvânia" className="object-cover w-full h-full" />
          </div>
        </div>

        <div className="md:w-1/2 p-16">
          <h2 className="text-3xl font-bold text-title mb-4">Valores</h2>
          <p className="text-writing text-lg mb-6">
          ✨ <b>Saúde integral</b> – O equilíbrio entre corpo, mente e espírito é a base para uma vida saudável e feliz.
          <br /><br />
          ✨ <b>Autenticidade</b> – Cada pessoa tem sua própria jornada, e minha abordagem respeita essa individualidade.
          <br /><br />
          ✨ <b>Empatia</b> – Acredito em um atendimento humanizado, próximo e acolhedor.
          <br /><br />
          ✨ <b>Educação e conhecimento</b> – Informação de qualidade transforma vidas. Meu compromisso é tornar a nutrição acessível e aplicável no dia a dia.
          <br /><br />
          ✨ <b>Excelência e inovação</b> – Busco sempre aprimorar meu trabalho, trazendo soluções eficazes e diferenciadas para meus pacientes e mentorados.
          <br /><br />
          ✨ <b>Propósito e impacto</b> – Tudo o que faço tem o objetivo de gerar mudanças positivas e duradouras na vida das pessoas.
          </p>
        </div>
      </div >

    </section>
  );
};

export default MissionValuesSection;