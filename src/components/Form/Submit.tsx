import { FormApi, FormState } from "@tanstack/react-form";
import { getFlatListOfKey } from "../../utils";
import { ReactFormApiLike } from "./types";

interface Props<T> {
  form: FormApi<T, undefined> & ReactFormApiLike<T>;
  label?: string;
  showErrors?: boolean;
  classDiv?: string;
  classButton?: string;
  classErrors?: string;
}

export default function Submit<T>({
  form,
  label,
  showErrors = true,
  classDiv,
  classButton,
  classErrors,
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
          <span className={classErrors}>
            {showErrors && (
              <em>{getFlatListOfKey(form.state.fieldMeta, "errors")}</em>
            )}
          </span>
        </div>
      )}
    </form.Subscribe>
  );
}
