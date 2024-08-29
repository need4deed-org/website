import { useTranslation } from "react-i18next";

import "./index.css";

function LegalNotice() {
  const { t } = useTranslation();

  return (
    <div className="n4d-container legal-container">
      <h2>{t("legal:notice.header")}</h2>
      <p>CLUB DIALOG e.V.</p>
      <p>Lindower Straße 18</p>
      <p>13347 Berlin-Wedding</p>
      <p>
        <span>{t("legal:notice.contacts.tel")}</span>: +49 30 2044859
      </p>
      <p>
        <span>{t("legal:notice.contacts.fax")}</span>: +49 30 2044610
      </p>
      <p>
        <span>{t("legal:notice.contacts.email")}</span>: info@club-dialog.de
      </p>
      <p>
        <span>{t("legal:notice.contacts.responsible")}</span>, Dr. Natalia
        Roesler
      </p>
      <h6>
        {t("legal:notice.registration")}: VR 10876 Nz{" "}
        <span>{t("legal:notice.court")}</span>
      </h6>
      <h6>{t("legal:notice.disclaimer")}</h6>
      <h6>{t("legal:notice.liability.header")}</h6>
      <p>{t("legal:notice.liability.body")}</p>
      <h6>{t("legal:notice.photoCredit.header")}</h6>
      <ul>
        <li>Google Maps</li>
        <li>{t("legal:notice.photoCredit.owner")}</li>
        <li>Adobe Stock</li>
      </ul>
      <p>{t("legal:notice.photoCredit.clubDialog")}</p>
      <a href="#">{t("legal:notice.dataProtectionLink")}</a>
      <h6>{t("legal:notice.dataProtectionOfficer")}</h6>
      <p>WS Datenschutz GmbH</p>
      <p>Dircksenstraße 51</p>
      <p>10178 Berlin</p>
      <p>clubdialog@ws-datenschutz.de</p>
    </div>
  );
}

export default LegalNotice;
