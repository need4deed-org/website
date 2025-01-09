const defaultValues = {};
const validators = {};
const structure = {};
function onSubmit({ value }: { value: typeof defaultValues }) {
  // eslint-disable-next-line no-console
  console.log("DEBUG:opportunity:onSubmit:value:", value);
}

export default { defaultValues, onSubmit, validators, structure };
