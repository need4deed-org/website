import { DeepKeys, FieldApi } from "@tanstack/react-form";

import { IncludeClassName } from "../../config/types";

interface Props<T, K extends DeepKeys<T>> extends IncludeClassName {
  field: FieldApi<T, K>;
}

export default function FieldInfo<T, K extends DeepKeys<T>>({
  field,
  className,
}: Props<T, K>) {
  return (
    <p className={`form-error ${className}`}>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <em>{field.state.meta.errors.join(", ")}</em>
      ) : null}
    </p>
  );
}
