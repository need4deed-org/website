import "../../../index.css";

interface Props {
  imageUrl: string;
  gradientClass: string;
}

export function ImageWithGradient({ imageUrl, gradientClass }: Props) {
  return (
    <div>
      <img
        src={imageUrl}
        alt="background-image"
        style={{ display: "block", width: "100%", height: "790px" }}
      />
      <div className={`gradient-overlay ${gradientClass}`} />
    </div>
  );
}

export default ImageWithGradient;
