import { Lang } from "need4deed-sdk";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import Form from "../components/forms";
import { FormType } from "../components/forms/types";
import { StaticPageLayout } from "../components/Layouts/staticPageLayout";

export default function VolunteerForm() {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(Lang.DE);
  }, [i18n]);

  return (
    <StaticPageLayout background="var(--color-white)">
      <Form form={FormType.OPPORTUNITY} />
    </StaticPageLayout>
  );
}
