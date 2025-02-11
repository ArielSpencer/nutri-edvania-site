import PhotoHighlight from "../PhotoHighlight";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

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
          <div className="xl:mr-32">
            <PhotoHighlight
              src="/assets/home/sobre-edvania-soares.png"
              alt="Nutricionista Edvânia Soares"
            />
          </div>

          <div className="text-center xl:text-left w-[80vw] xl:w-full pt-6 text-justify">
            <span className="text-secondary text-md uppercase">
              <h1>Sobre Edvânia Soares</h1>
            </span>
            <h2 className="text-4xl text-title font-black uppercase mb-4">
              Nullam sodales to velit vel turpis non velit
            </h2>
            <div className="flex flex-col pb-8 gap-2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere distinctio placeat quaerat impedit ipsam numquam, accusantium ullam rem! Qui labore quibusdam cupiditate culpa at eum, aliquid minus consectetur saepe excepturi!
              </p>
              <p>
                Nullam sodales velit vel turpis faucibus, accusantium ullam rem! Qui labore quibusdam cupiditate culpa at eum, non sagittis tortor scelerisque.
              </p>
              <p>
                Aliquid minus consectetur ullam as sodales vel turpis, non sagittis accusantium tortor scelerisque ullam rem at eum vel qui ullam rem labore.
              </p>
            </div>

            <div className="font-bold grid grid-cols-2 gap-8">
              <div className="flex items-center justify-center rounded-[16px_4px] bg-background gap-2 px-8 py-4 leading-[24px]">
                <div className="text-4xl text-accent">
                  <IoMdCheckmarkCircleOutline />
                </div>
                <h3>
                  Lorem ipsum dolor sit amet.
                </h3>
              </div>

              <div className="flex items-center justify-center rounded-[16px_4px] bg-background gap-2 px-8 py-2 leading-[24px]">
                <div className="text-4xl text-accent">
                  <IoMdCheckmarkCircleOutline />
                </div>
                <h3>
                  Lorem ipsum dolor sit amet.
                </h3>
              </div>

              <div className="flex items-center justify-center rounded-[16px_4px] bg-background gap-2 px-8 py-2 leading-[24px]">
                <div className="text-4xl text-accent">
                  <IoMdCheckmarkCircleOutline />
                </div>
                <h3>
                  Lorem ipsum dolor sit amet.
                </h3>
              </div>

              <div className="flex items-center justify-center rounded-[16px_4px] bg-background gap-2 px-8 py-2 leading-[24px]">
                <div className="text-4xl text-accent">
                  <IoMdCheckmarkCircleOutline />
                </div>
                <h3>
                  Lorem ipsum dolor sit amet.
                </h3>
              </div>
            </div>

          </div>
        </div>
      </div >
    </section >
  )
}

export default StorySection;