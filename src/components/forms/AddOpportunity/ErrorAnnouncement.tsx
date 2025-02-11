import { useTranslation } from "react-i18next";

import Announcement from "../../Announcement";

const hrefVolunteering =
  "https://docs.google.com/forms/d/e/1FAIpQLSdAFsyAyV_6i0d-QBemK-S7SZmusIfZqj_TVXilHd6X2ipkZw/viewform?usp=dialog";
const hrefAccompanying =
  "https://docs.google.com/forms/d/e/1FAIpQLSchYAJ1Mq8nOa5S54Af_FzDwyjPaHGIG9phT76AMIXmRu1Kdw/viewform?usp=dialog";

function LinksToGoogleForms() {
  const { t } = useTranslation();
  return (
    <>
      <p>
        <a href={hrefVolunteering}>
          {t("form.addOpportunity.wentWrong.volunteeringLink")}
        </a>
      </p>
      <p>
        <a href={hrefAccompanying}>
          {t("form.addOpportunity.wentWrong.accompanyingLink")}
        </a>
      </p>
    </>
  );
}

export default function ErrorAnnouncement() {
  return (
    <Announcement
      copies="form.addOpportunity.wentWrong"
      render={() => <LinksToGoogleForms />}
    />
  );
}
