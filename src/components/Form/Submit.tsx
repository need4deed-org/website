import { FormApi, FormState } from "@tanstack/react-form";
import { ReactFormApiLike } from "./types";

interface Props<T> {
  form: FormApi<T, undefined> & ReactFormApiLike<T>;
  label?: string;
  showErrors?: boolean;
  classDiv?: string;
  classButton?: string;
}

export default function Submit<T>({
  form,
  label,
  showErrors = true,
  classDiv,
  classButton,
}: Props<T>) {
  return (
    <form.Subscribe selector={(state: FormState<T>) => state}>
      {(state: Partial<FormState<T>>) => (
        <div className={classDiv}>
          <button
            className={classButton}
            type="submit"
            disabled={!state.canSubmit}
          >
            {label}
          </button>
          <span>
            {showErrors && (
              <em>
                {Array.from(
                  new Set(
                    Object.values(
                      form.state.fieldMeta as { errors: string[] }[],
                    )
                      .map(({ errors }) => errors)
                      .flat(),
                  ),
                ).join(", ")}
              </em>
            )}
          </span>
        </div>
      )}
    </form.Subscribe>
  );
}
