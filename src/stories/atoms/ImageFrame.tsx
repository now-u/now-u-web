import Image from "next/image";
import React from "react";

export interface ImageFrameProps {
  src: string;
  alt: string;
  containerClassName?: string;
  imageClassName?: string;
}

const ImageFrame: React.FC<ImageFrameProps> =
  ({ src, alt, containerClassName, imageClassName }) => {
  return (
    <div
      role="presentation"
      className={(containerClassName ?? "") + " relative"}
    >
      <Image
        src={src}
        alt={alt}
        width="480"
        height="270"
        className= {(imageClassName ?? "") + " aspect-video block object-cover relative w-full h-full"}
      />
    </div>
  );
};

export default ImageFrame;
