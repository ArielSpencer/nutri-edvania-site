import { Button } from "./ui/button";

const CTA = ({ title, description, buttonText }) => {
  return (
    <section className="w-full h-[40vh] flex items-center justify-center text-center text-primary bg-secondary">

      <div className="container mx-auto w-4/5 md:w-3/5 px-4">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-2 text-lg pb-8">{description}</p>
        <Button variant="secundary" size="lg">{buttonText}</Button>
      </div>

    </section>
  )
}

export default CTA;