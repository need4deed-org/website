import { FormApi, FormState } from "@tanstack/react-form";
import { ReactFormApiLike } from "./types";

interface Props<T> {
  form: FormApi<T, undefined> & ReactFormApiLike<T>;
  label?: string;
  classDiv?: string;
  classButton?: string;
}

export default function Submit<T>({
  form,
  label,
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
        </div>
      )}
    </form.Subscribe>
  );
}
