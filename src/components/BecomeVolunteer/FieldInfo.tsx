import { FieldApi } from "@tanstack/react-form";
import { VolunteerData, VolunteerDataKeys } from "./dataStructure";

interface Props {
  field: FieldApi<VolunteerData, VolunteerDataKeys>;
  className?: string;
}

export default function FieldInfo({ field, className }: Props) {
  return (
    <p className={`volunteer-error ${className}`}>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <em>{field.state.meta.errors.join(", ")}</em>
      ) : null}
    </p>
  );
}
