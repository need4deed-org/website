import { Lang } from "need4deed-sdk";
import { useTranslation } from "react-i18next";

import Event from "../components/Event/Event";
import { StaticPageLayout } from "../components/Layouts/staticPageLayout";
import useEvents from "../hooks/api/useEvents";

export default function EventPage() {
  const { i18n } = useTranslation();
  const [events] = useEvents(i18n.language as Lang);

  return (
    <StaticPageLayout>
      <Event eventData={events} />
    </StaticPageLayout>
  );
}
