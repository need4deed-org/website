import { BackgroundImg } from "../../styled/img";

interface Props {
  imageUrl: string;
  gradientClass: string;
  height?: string;
}

export function ImageWithGradient({ imageUrl, gradientClass, height }: Props) {
  return (
    <div>
      <BackgroundImg src={imageUrl} height={height} />
      <div className={`gradient-overlay ${gradientClass}`} />
    </div>
  );
}

export default ImageWithGradient;
