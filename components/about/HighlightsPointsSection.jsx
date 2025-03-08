import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const HighlightsPointsSection = () => {
  return (
    <section>
      <div className="text-sm font-bold grid grid-cols-2 gap-8 mt-20 mx-2">
        <div className="flex items-center justify-center rounded-[16px_4px] bg-background gap-4 p-4 leading-[24px]">
          <div className="text-4xl text-accent">
            <IoMdCheckmarkCircleOutline />
          </div>
          <h3>
            20 anos de experiência em nutrição.
          </h3>
        </div>

        <div className="flex items-center justify-center rounded-[16px_4px] bg-background gap-4 p-4 leading-[24px]">
          <div className="text-4xl text-accent">
            <IoMdCheckmarkCircleOutline />
          </div>
          <h3>
            CEO da Estima Nutrição, com 180 mil atendimentos
          </h3>
        </div>

        <div className="flex items-center justify-center rounded-[16px_4px] bg-background gap-4 p-4 leading-[24px]">
          <div className="text-4xl text-accent">
            <IoMdCheckmarkCircleOutline />
          </div>
          <h3>
            Apresentadora do 1º reality gastronômico de nutrição do Brasil
          </h3>
        </div>

        <div className="flex items-center justify-center rounded-[16px_4px] bg-background gap-4 p-4 leading-[24px]">
          <div className="text-4xl text-accent">
            <IoMdCheckmarkCircleOutline />
          </div>
          <h3>
            Mentora e palestrante, ajudando nutricionistas e empresas
          </h3>
        </div>
      </div>
    </section>
  )
}

export default HighlightsPointsSection;