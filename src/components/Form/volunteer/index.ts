import fallbackLists from "../../forms/fallbackLists";
import { ListsOfOptions } from "../../forms/types";
import { getAllSelectedFalse, getScheduleState } from "../../forms/utils";

const lists = fallbackLists;
const defaultValues = {
  name: "",
  email: "",
  phone: "",
  postcode: "",
  locations: getAllSelectedFalse(lists[ListsOfOptions.LOCATIONS]),
  availability: getScheduleState(),
  languagesNative: getAllSelectedFalse(lists[ListsOfOptions.LANGUAGES]),
  languagesFluent: getAllSelectedFalse(lists[ListsOfOptions.LANGUAGES]),
  languagesIntermediate: getAllSelectedFalse(lists[ListsOfOptions.LANGUAGES]),
  activities: getAllSelectedFalse(lists[ListsOfOptions.ACTIVITIES]),
  skills: getAllSelectedFalse(lists[ListsOfOptions.SKILLS]),
  certOfGoodConduct: undefined,
  certMeaslesVaccination: undefined,
  leadFrom: getAllSelectedFalse(lists[ListsOfOptions.LEADS]),
  comments: "",
  consent: undefined,
};

const validators = {};

const structure = {
  main: {},
  sections: {},
};

function onSubmit({ value }: { value: typeof defaultValues }) {
  // eslint-disable-next-line no-console
  console.log("DEBUG:volunteer:onSubmit:value:", value);
}

export default { defaultValues, onSubmit, validators, structure };
