import { Lang } from "need4deed-sdk";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import Event from "../components/Event/Event";
import { StaticPageLayout } from "../components/Layouts/staticPageLayout";
import useEvents from "../hooks/api/useEvents";

export default function EventPage() {
  const { i18n } = useTranslation();
  const [events] = useEvents(i18n.language as Lang);

  const eventActive = useMemo(
    () => events?.find((event) => event.active),
    [events],
  );
  return (
    <StaticPageLayout>
      <Event eventData={{ event: eventActive }} />
    </StaticPageLayout>
  );
}
