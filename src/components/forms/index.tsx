import AddOpportunity from "./AddOpportunity";
import BecomeVolunteer from "./BecomeVolunteer";
import { FormType } from "./types";

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
