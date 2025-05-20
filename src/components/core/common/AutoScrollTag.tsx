import { useRef } from "react";

interface Props extends React.HTMLAttributes<HTMLElement> {
  Tag?: React.ElementType;
  scrollLeftmost?: (element: HTMLElement) => void;
}

export default function AutoScrollTag({
  Tag = "li",
  scrollLeftmost,
  children,
  ...rest
}: Props) {
  const ref = useRef<HTMLElement>(null);

  if (scrollLeftmost && ref.current) {
    scrollLeftmost(ref.current);
  }

  return (
    <Tag
      tabIndex="0"
      ref={ref}
      onFocus={() => {
        if (ref.current) {
          ref.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "nearest",
          });
        }
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {children}
    </Tag>
  );
}
