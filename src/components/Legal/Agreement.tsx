import { useTranslation } from "react-i18next";

import "./index.css";

export default function Agreement() {
  const { t } = useTranslation();

  return (
    <div className="n4d-container legal-container">
      <h2>{t("legal:agreement.header")}</h2>
      <p>{t("legal:agreement.para1")}</p>
      <p>{t("legal:agreement.para2")}</p>
      <ol>
        <li>{t("legal:agreement.numbered1")}</li>
        <ul>
          <li>{t("legal:agreement.bullet11")}</li>
          <ul>
            <li>{t("legal:agreement.subBullet111")}</li>
            <li>{t("legal:agreement.subBullet112")}</li>
            <li>{t("legal:agreement.subBullet113")}</li>
          </ul>
        </ul>
        <li>{t("legal:agreement.numbered2")}</li>
        <ul>
          <li>{t("legal:agreement.bullet21")}</li>
        </ul>
        <li>{t("legal:agreement.numbered3")}</li>
        <ul>
          <li>{t("legal:agreement.bullet31")}</li>
          <li>{t("legal:agreement.bullet32")}</li>
        </ul>
        <li>{t("legal:agreement.numbered4")}</li>
        <ul>
          <li>{t("legal:agreement.bullet41")}</li>
          <li>{t("legal:agreement.bullet42")}</li>
        </ul>
        <li>{t("legal:agreement.numbered5")}</li>
        <ul>
          <li>{t("legal:agreement.bullet51")}</li>
        </ul>
        <li>{t("legal:agreement.numbered6")}</li>
        <ul>
          <li>{t("legal:agreement.bullet61")}</li>
        </ul>
        <li>{t("legal:agreement.numbered7")}</li>
        <ul>
          <li>{t("legal:agreement.bullet71")}</li>
        </ul>
        <li>{t("legal:agreement.numbered8")}</li>
        <ul>
          <li>{t("legal:agreement.bullet81")}</li>
        </ul>
      </ol>
    </div>
  );
}
