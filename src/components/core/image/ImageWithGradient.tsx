import "../../../index.css";

interface Props {
  imageUrl: string;
  gradientClass: string;
  height?: string;
}

export function ImageWithGradient({ imageUrl, gradientClass, height }: Props) {
  return (
    <div>
      <img
        src={imageUrl}
        alt="background-image"
        style={{
          display: "block",
          width: "100%",
          height: height || "100%",
        }}
      />
      <div className={`gradient-overlay ${gradientClass}`} />
    </div>
  );
}

export default ImageWithGradient;
