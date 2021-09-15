import Image from "next/image";

const MDXImage = ({ src, alt: altWithSize }: { src: string; alt: string }) => {
  const [alt, size] = altWithSize.split(",");
  const [width, height = "512"] = size.split("x");

  // ! remote images are not handled yet ![Alt Text](https://get.svg.workers.dev/?s=64&f=gray "Image Title")
  // TODO: add support for remote images
  return (
    <Image
      alt={alt}
      src={src}
      // intrinsic is default, alternative would be to use responsive
      layout="intrinsic"
      width={width}
      height={height}
    />
  );
};

export default MDXImage;
