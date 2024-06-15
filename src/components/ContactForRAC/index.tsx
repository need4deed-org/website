import { useTranslation } from "react-i18next";
import "./index.css";

const emailForRAC = "contact@need4deed.org";

export default function ContactForRAC() {
  const { t } = useTranslation();
  return (
    <div className="wrapper greenish">
      <div className="contact-for-rac-container">
        <h2>{t("contactForRAC.heading")}</h2>
        <a href={`mailto:${emailForRAC}`}>
          {`${t("contactForRAC.emailUs")}: `}
          <em>{`${emailForRAC}`}</em>
        </a>
      </div>
    </div>
  );
}
