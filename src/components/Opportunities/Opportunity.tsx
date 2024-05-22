import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { Lang } from "../../types";
import { getOpportunityImg, isRtlLang } from "../../utils";

interface Props {
  opportunity: Record<string, string>;
}

export default function Opportunity({ opportunity }: Props) {
  const { t, i18n } = useTranslation();
  const titleBtn = t("projectIntro.beVolunteerButton");
  const srcImg = useMemo(
    () => getOpportunityImg(opportunity.type),
    [opportunity.type],
  );

  return (
    <div className="opportunity-card">
      <img src={srcImg} alt="image" />
      <h5>{opportunity.name}</h5>
      <p>{opportunity.type}</p>
      <h6>Languages:</h6>
      <p>
        <strong>{opportunity.languages}</strong>
      </p>
      <h6>Time:</h6>
      <p>{opportunity.schedule}</p>
      <h6>Location:</h6>
      <p>{opportunity.district}</p>
      <a className="btn btn-light" href={t("formLink")} target="_blank">
        {titleBtn.at(-1) === "!" && isRtlLang(i18n.language as Lang)
          ? titleBtn.slice(0, -1)
          : titleBtn}
      </a>
    </div>
  );
}
