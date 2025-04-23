import "../../../index.css";

interface Props {
  imageUrl: string;
  gradientClass: string;
}

export function ImageWithGradient({ imageUrl, gradientClass }: Props) {
  return (
    // <div style={{ maxHeight: "387px" }}>
    <div>
      <img
        src={imageUrl}
        alt="background-image"
        style={{ display: "block", width: "100%", height: "auto" }}
      />
      <div className={`gradient-overlay ${gradientClass}`} />
    </div>
  );
}

export default ImageWithGradient;
