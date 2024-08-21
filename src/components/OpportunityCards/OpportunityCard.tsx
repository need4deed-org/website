import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Lang } from "../../types";
import { getOpportunityImg, isoCodesToNames, isRtlLang } from "../../utils";

interface Props {
  opportunity: Record<string, string>;
  pre?: boolean;
}

export default function Translation({ opportunity, pre = false }: Props) {
  const { t, i18n } = useTranslation();
  const titleBtn = t("projectIntro.beVolunteerButton");
  const srcImg = useMemo(
    () => getOpportunityImg(opportunity.type),
    [opportunity.type],
  );
  return pre ? (
    <pre className="opportunity-card">
      {JSON.stringify(opportunity, null, 2)}
    </pre>
  ) : (
    <div className="opportunity-card">
      <img src={srcImg} alt="image" />
      <h5>{opportunity.name}</h5>
      <p>{opportunity.type}</p>
      <h6>Languages:</h6>
      <p>
        <strong>{isoCodesToNames(opportunity.languages)}</strong>
      </p>
      <h6>Time:</h6>
      <p>{opportunity.time}</p>
      <h6>Location:</h6>
      <p>{opportunity.location}</p>
      <a className="btn n4d-primary-btn" href={t("formLink")} target="_blank">
        {titleBtn.at(-1) === "!" && isRtlLang(i18n.language as Lang)
          ? titleBtn.slice(0, -1)
          : titleBtn}
      </a>
    </div>
  );
}
