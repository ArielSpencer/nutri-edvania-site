"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = ({ src, alt }) => {
  return (
    <div className="w-[256px] xl:w-[448px] h-[256px] xl:h-[448px] m-12 relative flex items-center justify-center">
      <Image
        src={src}
        priority
        quality={100}
        fill
        alt={alt}
        className="rounded-[80px_4px] xl:rounded-[144px_4px] object-contain shadow-[20px_-20px_0px_rgba(141,142,122,0.8)]"
        sizes="256px"
      />
    </div>
  )
}

export default Photo;