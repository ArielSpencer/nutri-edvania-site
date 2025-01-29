import Image from "next/image";
import MissionPhoto from "@/public/assets/home/sobre-edvania-soares.png";
import ValuePhoto from "@/public/assets/home/sobre-edvania-soares.png";

const MissionVisionSection = () => {
  return (
    <section className="container flex flex-col mx-auto py-16 gap-16">

      <div className="flex flex-col md:flex-row items-center bg-background-light p-8 shadow-md rounded-[256px_16px]">
        <div className="md:w-1/2 p-16">
          <p className="text-secondary uppercase tracking-widest mb-2">Lorem Ipsum</p>
          <h2 className="text-3xl font-bold text-writing mb-4">Minha Missão</h2>
          <p className="text-writing text-lg mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis soluta omnis aperiam iusto, blanditiis rem laborum? <br /><br />Tempore voluptatem vitae voluptas assumenda. Perspiciatis ad tempora vitae corporis optio eaque esse adipisci.
          </p>
        </div>

        <div className="md:w-1/2 relative">
          <div className="rounded-lg overflow-hidden rounded-[230px_8px]">
            <Image src={MissionPhoto} alt="Missão Edvânia" className="object-cover w-full h-full" />
          </div>
        </div>
      </div >

      <div className="flex flex-col md:flex-row items-center bg-background-light p-8 shadow-md rounded-[256px_16px]">
        <div className="md:w-1/2 relative">
          <div className="rounded-lg overflow-hidden rounded-[230px_8px]">
            <Image src={ValuePhoto} alt="Valores Edvânia" className="object-cover w-full h-full" />
          </div>
        </div>

        <div className="md:w-1/2 p-16">
          <p className="text-secondary uppercase tracking-widest mb-2">Lorem Ipsum</p>
          <h2 className="text-3xl font-bold text-writing mb-4">Minha Visão</h2>
          <p className="text-writing text-lg mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis soluta omnis aperiam iusto, blanditiis rem laborum. <br /><br />Tempore voluptatem vitae voluptas assumenda. Perspiciatis ad tempora vitae corporis optio eaque esse adipisci.
          </p>
        </div>
      </div >

    </section>
  );
};

export default MissionVisionSection;