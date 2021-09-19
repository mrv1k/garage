// ! Images are not as optimized on Gatsby
import Image from "next/image";

const MDXImage = ({ src }) => {
  // return <div>wtf</div>;
  // return <Image src={src} layout="fill" />;
  return (
    <Image
      // alt={alt}
      src={src}
      // intrinsic is default, alternative would be to use responsive
      layout="intrinsic"
      width={512}
      height={512}
    />
  );
};
export { MDXImage };

export default MDXImage;
