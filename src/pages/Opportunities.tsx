import { Lang, OpportunityType } from "need4deed-sdk";
import { useTranslation } from "react-i18next";

import { StaticPageLayout } from "../components/Layouts/staticPageLayout";
import OpportunityCards from "../components/OpportunityCards";
import { Heading2 } from "../components/styled/text";
import OpportunityCardForGrid from "../components/VolunteeringOpportunities/OpportunityCardForGrid";
import { urlApiOpportunity } from "../config/constants";

export default function Opportunities() {
  const { i18n, t } = useTranslation();

  return (
    <StaticPageLayout>
      <div
        // temporary styling for the opportunities page
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          width: "fit-content",
          marginInline: "auto",
        }}
      >
        <Heading2>{t("opportunityPage.header")}</Heading2>
        <OpportunityCards
          className="temp-opportunities-container"
          url={urlApiOpportunity}
          opportunityParams={{
            search: {
              status: ["Volunteers Needed", "Search in process"],
              opportunity_type: [
                OpportunityType.GENERAL,
                OpportunityType.ACCOMPANYING,
              ],
            },
            primaryKeys: ["title", "name"],
            language: i18n.language as Lang,
          }}
          keyMap={{
            id: "id",
            type: "opportunity_type",
            title: "title",
            languages: "languages",
            time: "schedule_str",
            location: "berlin_locations",
            categoryId: "category_id",
            activities: "activities",
            createdAt: "created_at",
            updatedAt: "updated_at",
            accompDate: "accomp_datetime",
            vo: "vo_information",
          }}
          CardComponent={OpportunityCardForGrid}
        />
      </div>
    </StaticPageLayout>
  );
}
