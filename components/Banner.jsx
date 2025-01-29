"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";


const Banner = ({ title, description }) => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <section className="relative w-full h-[32vh] flex items-center justify-center text-center text-primary bg-secondary/70">
      <Image
        src="/assets/banners/banner-sections-edvania-soares.png"
        alt="Banner Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 -z-10"
      />

      <div className="container mx-auto w-4/5 md:w-2/5 px-4">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-2 text-lg ">{description}</p>

        <nav className="flex items-center justify-center mt-4 text-sm text-background-highlight">
          <a href="/" className="hover:underline">Home</a>
          {pathSegments.map((segment, index) => {
            const path = "/" + pathSegments.slice(0, index + 1).join("/");

            const formattedSegment = segment
              .split("-")
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ");

            return (
              <span key={path} >
                <span className="px-2">&raquo;</span>
                <a href={path} className="hover:underline">{formattedSegment}</a>
              </span>
            );
          })}
        </nav>
      </div>
    </section>
  );
};

export default Banner;