import { FormType } from "../../config/types";
import AddOpportunity from "./AddOpportunity";
import BecomeVolunteer from "./BecomeVolunteer";

interface Props {
  form: FormType;
}

function render(form: FormType) {
  switch (form) {
    case FormType.VOLUNTEER:
      return <BecomeVolunteer />;
    case FormType.OPPORTUNITY:
      return <AddOpportunity />;
    default:
      return null;
  }
}

export default function Form({ form }: Props) {
  return render(form);
}
