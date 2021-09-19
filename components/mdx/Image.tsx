// ! Images are not as optimized on Gatsby
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

const MDXImage = ({ src, alt }: Props) => {
  // return <div>wtf</div>;
  // return <Image src={src} layout="fill" />;
  return (
    <Image
      alt={alt}
      src={src}
      // intrinsic is default, alternative would be to use responsive
      layout="intrinsic"
      width={512}
      height={512}
    />
  );
};

export default MDXImage;
