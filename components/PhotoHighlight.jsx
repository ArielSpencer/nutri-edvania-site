"use client";

import Image from "next/image";

const PhotoHighlight = ({ src, alt }) => {
  return (
    <div className="w-[256px] xl:w-[448px] h-[256px] xl:h-[448px] m-8 relative flex items-center justify-center">
      <Image
        src={src}
        priority
        quality={100}
        alt={alt}
        width={512}
        height={512}
        className="rounded-[80px_4px] xl:rounded-[128px_4px] object-contain shadow-[20px_20px_0px_rgba(235,230,221,0.8)]"
      />
    </div>
  );
};

export default PhotoHighlight;