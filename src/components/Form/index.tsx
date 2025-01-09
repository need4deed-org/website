import { FormApi, FormValidators, useForm } from "@tanstack/react-form";
import InputField from "./InputField";
import Submit from "./Submit";

interface Props<T extends object> {
  defaultValues: T;
  validators?: FormValidators<T, undefined>;
  onSubmit: (props: { value: T; formApi: FormApi<T, undefined> }) => void;
}

export default function Form<T extends object>({
  defaultValues,
  validators,
  onSubmit,
}: Props<T>) {
  const form = useForm<T>({ defaultValues, validators, onSubmit });
  return (
    <div className="n4d-container form-container">
      <form
        className="form-form-container"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <h3>Become Volunteer!</h3>
        <InputField<T> form={form} name="name" label="Name" />
        <br />
        <Submit<T> form={form} label="Submit" />
      </form>
    </div>
  );
}
