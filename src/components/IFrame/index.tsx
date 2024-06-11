import "./index.css";

interface Prop {
  wrappingClassName?: string;
  title?: string;
  src: string;
}

export default function IFrame({
  wrappingClassName = "wrapper",
  title,
  src,
}: Prop) {
  return (
    <div className={wrappingClassName}>
      <div className="iframe-container">
        {title && <h2>{title}</h2>}
        <iframe src={src} />
      </div>
    </div>
  );
}
