"use client";

import Image from "next/image";

const PhotoSections = ({ src, alt }) => {
  return (
    <div className="m-0 p-0 relative flex items-center justify-center">
      <Image
        src={src}
        priority
        quality={100}
        alt={alt}
        width={256}
        height={256}
        className="rounded-[64px_4px] object-contain"
      />
    </div>
  );
};

export default PhotoSections;