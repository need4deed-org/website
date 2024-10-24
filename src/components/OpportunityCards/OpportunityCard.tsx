import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Lang } from "../../config/types";
import {
  getMainCtaUrl,
  getOpportunityImg,
  getReadableTime,
  isoCodesToNames,
  isRtlLang,
} from "../../utils";
import VOInformation from "./VOInformation";

interface Props {
  opportunity: Record<string, string>;
  pre?: boolean;
}

export default function OpportunityCard({ opportunity, pre = false }: Props) {
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
  return pre ? (
    <pre className="opportunity-card">
      {JSON.stringify(opportunity, null, 2)}
    </pre>
  ) : (
    <div className="opportunity-card">
      <img src={srcImg} alt="image" />
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

      <h6>Languages:</h6>
      <p>
        <strong>{isoCodesToNames(opportunity.languages)}</strong>
      </p>
      <h6>Time:</h6>
      <p>{getReadableTime(opportunity.time, i18n.language)}</p>
      <h6>Location:</h6>
      <p>{opportunity.location}</p>
      <a className="btn n4d-cta" href={urlMainCTA} target="_blank">
        {titleBtn.at(-1) === "!" && isRtlLang(i18n.language as Lang)
          ? titleBtn.slice(0, -1)
          : titleBtn}
      </a>
    </div>
  );
}
