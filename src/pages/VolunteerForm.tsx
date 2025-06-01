import Form from "../components/forms";
import { FormType } from "../components/forms/types";
import { StaticPageLayout } from "../components/Layouts/staticPageLayout";

export default function VolunteerForm() {
  return (
    <StaticPageLayout>
      <Form form={FormType.VOLUNTEER} />
    </StaticPageLayout>
  );
}
