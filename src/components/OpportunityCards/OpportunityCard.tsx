import { Lang } from "need4deed-sdk";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import {
  getMainCtaUrl,
  getOpportunityImg,
  getReadableLocalTime,
  isoCodesToNames,
  isRtlLang,
} from "../../utils";
import VOInformation from "./VOInformation";

interface Props {
  opportunity: Record<string, string>;
}

export default function OpportunityCard({ opportunity }: Props) {
  const { t, i18n } = useTranslation();
  const titleBtn = t("projectIntro.beVolunteerButton");
  const srcImg = useMemo(
    () => getOpportunityImg(opportunity.type),
    [opportunity.type],
  );
  const urlMainCTA = getMainCtaUrl({
    lng: i18n.language as Lang,
    id: opportunity.id,
    title: opportunity.name,
  });

  return (
    <div className="opportunity-card">
      <img src={srcImg} alt="Opportunity example" />
      <h5>{opportunity.name}</h5>
      {opportunity.vo ? (
        <>
          <VOInformation title={opportunity.vo} />
          <p>
            <strong>{opportunity.type}</strong>
          </p>
        </>
      ) : (
        <p>{opportunity.type}</p>
      )}

      <h6>{t("opportunityCard.titles.languages")}:</h6>
      <p>
        <strong>{isoCodesToNames(opportunity.languages)}</strong>
      </p>
      <h6>{t("opportunityCard.titles.time")}:</h6>
      <p>{getReadableLocalTime(opportunity.time, i18n.language)}</p>
      <h6>{t("opportunityCard.titles.location")}:</h6>
      <p>{opportunity.location}</p>
      <a
        className="btn n4d-cta"
        href={urlMainCTA}
        target="_blank"
        rel="noreferrer"
      >
        {titleBtn.at(-1) === "!" && isRtlLang(i18n.language as Lang)
          ? titleBtn.slice(0, -1)
          : titleBtn}
      </a>
    </div>
  );
}
