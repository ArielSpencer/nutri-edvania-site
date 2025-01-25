"use client";

import { Button } from "../ui/button";
import { IoPlayCircleOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

const YouTubeSection = () => {
  const videoLink = "https://www.youtube.com/watch?v=wAiAluZm-MU&t=0s";
  const thumbnail = "https://i.ytimg.com/vi/wAiAluZm-MU/hqdefault.jpg";
  return (
    <section className="bg-background-light h-full flex flex-col items-center justify-center py-20 gap-8">
      <div className="text-center">
        <h2 className="text-secondary text-md uppercase">YouTube</h2>
        <p className="text-4xl font-writing uppercase mb-8">Loren Ipsum</p>
      </div>

      <div className="relative w-[60vw] max-w-[960px] h-[340px] sm:h-[540px] rounded-[16px] overflow-hidden shadow-lg">
        <Link href={videoLink} target="_blank" className="group">
          <Image
            src={thumbnail}
            alt="Vídeo Recente Nutri Edvania Soares"
            layout="fill"
            objectFit="cover"
            priority
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-secondary/10 group-hover:bg-background-highlight/10 transition-colors duration-300">
            <IoPlayCircleOutline className="text-accent/40 group-hover:text-accent/80 w-32 h-32 group-hover:scale-110 transition-transform duration-200" />
          </div>
        </Link>
      </div>

      <Link href="https://www.youtube.com/@NutriEdvaniaSoares" target="_blank">
        <Button variant="secundary">Se inscreva</Button>
      </Link>
    </section>
  );
};

export default YouTubeSection;