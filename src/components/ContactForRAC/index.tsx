import { useTranslation } from "react-i18next";
import "./index.css";

const emailForRAC = "contact@need4deed.org";

interface Props {
  wrappingClassName: string;
}

export default function ContactForRAC({ wrappingClassName }: Props) {
  const { t } = useTranslation();
  return (
    <div className={wrappingClassName}>
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
