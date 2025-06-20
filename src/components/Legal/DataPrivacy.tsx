import { useTranslation } from "react-i18next";

import useMatchMedia from "../../hooks/useMatchMedia";
import "./index.css";

function DataPrivacy() {
  const isWrappingNeeded = useMatchMedia("(max-width: 400px)");
  const { t } = useTranslation();

  return (
    <div className="n4d-container legal-container">
      <p>Israa Test 1</p>
      <h2>{t("legal:dataPrivacy.header")}</h2>
      <p>{t("legal:dataPrivacy.intro1")}</p>
      <p>{t("legal:dataPrivacy.intro2")}</p>
      {/*  */}
      <h3>{t("legal:dataPrivacy.generalInfo.header")}</h3>
      <h6>{t("legal:dataPrivacy.generalInfo.responsible.header")}</h6>
      <p>{t("legal:dataPrivacy.generalInfo.responsible.title")}:</p>
      <p>
        <strong>Club Dialog e.V.</strong>
      </p>
      <p>
        <strong>
          {t("legal:dataPrivacy.generalInfo.responsible.address")}
          {": "}
        </strong>
        Lindower Straße 18, 13347 Berlin
      </p>
      <p>
        <strong>
          {t("legal:dataPrivacy.generalInfo.responsible.tel")}
          {": "}
        </strong>
        +49 30 204 48 59
      </p>
      <p>
        <strong>
          {t("legal:dataPrivacy.generalInfo.responsible.email")}
          {": "}
        </strong>
        info@club-dialog.de
      </p>
      <a href="https://www.club-dialog.de/">
        <p>
          <strong>
            {t("legal:dataPrivacy.generalInfo.responsible.homepage")}
            {": "}
          </strong>
          https://www.club-dialog.de/
        </p>
      </a>
      <h6>{t("legal:dataPrivacy.generalInfo.officer.header")}</h6>
      <p>{t("legal:dataPrivacy.generalInfo.officer.title")}:</p>
      <p>
        Kemal Webersohn{" "}
        <span>{t("legal:dataPrivacy.generalInfo.officer.from")}</span> WS
        Datenschutz GmbH
      </p>
      <p>
        {t("legal:dataPrivacy.generalInfo.officer.emailText")}
        {": "}
        <strong>clubdialog@ws-datenschutz.de</strong>
      </p>
      <p>WS Datenschutz GmbH</p>
      <p>Dircksenstraße 51 </p>
      <p>D-10178 Berlin</p>
      <p>
        <a href="https://webersohnundscholtz.de">
          https://webersohnundscholtz.de
        </a>
      </p>
      <h6>{t("legal:dataPrivacy.generalInfo.protection.header")}</h6>
      <p>{t("legal:dataPrivacy.generalInfo.protection.para1")}</p>
      <p>{t("legal:dataPrivacy.generalInfo.protection.para2")}</p>
      <p>{t("legal:dataPrivacy.generalInfo.protection.para3")}</p>
      <p>{t("legal:dataPrivacy.generalInfo.protection.para4")}</p>
      <h6>{t("legal:dataPrivacy.generalInfo.deletion.header")}</h6>
      <p>{t("legal:dataPrivacy.generalInfo.deletion.para")}</p>
      <h3>{t("legal:dataPrivacy.dataProcessing.header")}</h3>
      <h6>{t("legal:dataPrivacy.dataProcessing.description.header")}</h6>
      <p>{t("legal:dataPrivacy.dataProcessing.description.para1")}</p>
      <p>{t("legal:dataPrivacy.dataProcessing.description.para2")}</p>
      <p>
        ALL-INKL.COM – Neue Medien Münnich, Hauptstraße 68, 02742 Friedersdorf,
        Deutschland.
      </p>
      <p>
        {t("legal:dataPrivacy.dataProcessing.description.para3")}{" "}
        <strong>
          <a href="https://all-inkl.com/datenschutzinformationen/">
            https://all-inkl.com/datenschutzinformationen/
          </a>
        </strong>
      </p>
      <h6>{t("legal:dataPrivacy.dataProcessing.basis.header")}</h6>
      <p>{t("legal:dataPrivacy.dataProcessing.basis.para")}</p>
      <h6>{t("legal:dataPrivacy.dataProcessing.purpose.header")}</h6>
      <p>{t("legal:dataPrivacy.dataProcessing.purpose.para")}</p>
      <h6>{t("legal:dataPrivacy.dataProcessing.duration.header")}</h6>
      <p>{t("legal:dataPrivacy.dataProcessing.duration.para")}</p>
      <h6>{t("legal:dataPrivacy.dataProcessing.possibility.header")}</h6>
      <p>{t("legal:dataPrivacy.dataProcessing.possibility.para")}</p>
      {/*  */}
      <h3>{t("legal:dataPrivacy.cookies.header")}</h3>
      <h6>{t("legal:dataPrivacy.cookies.description.header")}</h6>
      <p>{t("legal:dataPrivacy.cookies.description.para1")}</p>
      <ul>
        <li>{t("legal:dataPrivacy.cookies.description.bullet1")}</li>
        <li>{t("legal:dataPrivacy.cookies.description.bullet2")}</li>
        <li>{t("legal:dataPrivacy.cookies.description.bullet3")}</li>
        <li>{t("legal:dataPrivacy.cookies.description.bullet4")}</li>
        <li>{t("legal:dataPrivacy.cookies.description.bullet5")}</li>
      </ul>
      <p>{t("legal:dataPrivacy.cookies.description.para2")}</p>
      <h6>{t("legal:dataPrivacy.cookies.basis.header")}</h6>
      <p>{t("legal:dataPrivacy.cookies.basis.para1")}</p>
      <p>{t("legal:dataPrivacy.cookies.basis.para2")}</p>
      <h6>{t("legal:dataPrivacy.cookies.purpose.header")}</h6>
      <p>{t("legal:dataPrivacy.cookies.purpose.para")}</p>
      <h6>{t("legal:dataPrivacy.cookies.duration.header")}</h6>
      <p>{t("legal:dataPrivacy.cookies.duration.para")}</p>
      <ul>
        <li>{t("legal:dataPrivacy.cookies.duration.bullet1")}</li>
        <li>{t("legal:dataPrivacy.cookies.duration.bullet2")}</li>
      </ul>
      <ol>
        <li>{t("legal:dataPrivacy.cookies.duration.numbered1")}</li>
        <li>{t("legal:dataPrivacy.cookies.duration.numbered2")}</li>
      </ol>
      <h6>{t("legal:dataPrivacy.cookies.possibility.header")}</h6>
      <p>{t("legal:dataPrivacy.cookies.possibility.para1")}</p>
      <p>{t("legal:dataPrivacy.cookies.possibility.para2")}</p>
      {/*  */}
      <h3>{t("legal:dataPrivacy.contact.header")}</h3>
      <h6>{t("legal:dataPrivacy.contact.description.header")}</h6>
      <p>{t("legal:dataPrivacy.contact.description.para1")}</p>
      <p>{t("legal:dataPrivacy.contact.description.para2")}</p>
      <h6>{t("legal:dataPrivacy.contact.basis.header")}</h6>
      <p>{t("legal:dataPrivacy.contact.basis.para")}</p>
      <h6>{t("legal:dataPrivacy.contact.purpose.header")}</h6>
      <p>{t("legal:dataPrivacy.contact.purpose.para")}</p>
      <h6>{t("legal:dataPrivacy.contact.duration.header")}</h6>
      <p>{t("legal:dataPrivacy.contact.duration.para")}</p>
      <h6>{t("legal:dataPrivacy.contact.possibility.header")}</h6>
      <p>{t("legal:dataPrivacy.contact.possibility.para")}</p>
      {/*  */}
      <h3>{t("legal:dataPrivacy.social.header")}</h3>
      <p>{t("legal:dataPrivacy.social.para1")}</p>
      <p>
        <strong>{t("legal:dataPrivacy.social.para2")}</strong>
      </p>
      <p>{t("legal:dataPrivacy.social.para3")}</p>
      <p>{t("legal:dataPrivacy.social.para4")}</p>
      <p>
        <a href="https://de-de.facebook.com/help/pages/insights">
          <strong>Meta{": "}</strong>
          https://de-de.facebook.com/help/pages/insights
        </a>
        {", "}
        <a href="https://de-de.facebook.com/about/privacy">
          https://de-de.facebook.com/about/privacy
        </a>
        {", "}
        <a href="https://de-de.facebook.com/full_data_use_policy">
          https://de-de.facebook.com/full_data_use_policy
        </a>
      </p>
      <p>
        <a href="https://help.instagram.com/155833707900388">
          <strong>Instagram{": "}</strong>
          https://help.instagram.com/155833707900388{", "}
        </a>
        <a href="https://www.instagram.com/about/legal/privacy/">
          https://www.instagram.com/about/legal/privacy/
        </a>
      </p>
      <p>
        <a href="https://twitter.com/privacy?lang=de">
          <strong>Twitter{": "}</strong>https://twitter.com/privacy?lang=de
        </a>
      </p>
      <p>
        <a href="https://ok.ru/privacypolicy#cmpnoscreen">
          <strong>OK.RU{": "}</strong>https://ok.ru/privacypolicy#cmpnoscreen
        </a>
      </p>
      {/*  */}
      <h3>{t("legal:dataPrivacy.trackers.header")}</h3>
      {/*  */}
      <h4>{t("legal:dataPrivacy.trackers.google.header")}</h4>
      <h6>{t("legal:dataPrivacy.trackers.google.description.header")}</h6>
      <p>{t("legal:dataPrivacy.trackers.google.description.para1")}</p>
      <p>{t("legal:dataPrivacy.trackers.google.description.para2")}</p>
      <p>{t("legal:dataPrivacy.trackers.google.description.para3")}</p>
      <p>
        <span>{t("legal:dataPrivacy.trackers.google.description.para41")}</span>
        <a href="https://www.google.de/intl/de/policies/">
          <strong>https://www.google.de/intl/de/policies/</strong>
        </a>
        <span>{t("legal:dataPrivacy.trackers.google.description.para42")}</span>
        <a href="http://www.google.com/analytics/terms/de.html">
          <strong>http://www.google.com/analytics/terms/de.html</strong>
        </a>
        <span>{t("legal:dataPrivacy.trackers.google.description.para43")}</span>
      </p>
      <h6>{t("legal:dataPrivacy.trackers.google.basis.header")}</h6>
      <p>{t("legal:dataPrivacy.trackers.google.basis.para")}</p>
      <h6>{t("legal:dataPrivacy.trackers.google.purpose.header")}</h6>
      <p>{t("legal:dataPrivacy.trackers.google.purpose.para")}</p>
      <h6>{t("legal:dataPrivacy.trackers.google.duration.header")}</h6>
      <p>{t("legal:dataPrivacy.trackers.google.duration.para")}</p>
      <h6>{t("legal:dataPrivacy.trackers.google.possibility.header")}</h6>
      <p>{t("legal:dataPrivacy.trackers.google.possibility.para")}</p>
      {/*  */}
      <h3>{t("legal:dataPrivacy.tools.header")}</h3>
      {/*  */}
      <h4>{t("legal:dataPrivacy.tools.google.header")}</h4>
      <h6>{t("legal:dataPrivacy.tools.google.description.header")}</h6>
      <p>{t("legal:dataPrivacy.tools.google.description.para1")}</p>
      <p>
        {t("legal:dataPrivacy.tools.google.description.para2")}
        <a href="https://www.google.com/intl/de_de/help/terms_maps.html">
          <strong>
            {isWrappingNeeded
              ? "https://www.google.com/intl/de_de\n/help/terms_maps.html"
              : "https://www.google.com/intl/de_de/help/terms_maps.html"}
          </strong>
        </a>
      </p>
      <h6>{t("legal:dataPrivacy.tools.google.basis.header")}</h6>
      <p>{t("legal:dataPrivacy.tools.google.basis.para")}</p>
      <h6>{t("legal:dataPrivacy.tools.google.purpose.header")}</h6>
      <p>{t("legal:dataPrivacy.tools.google.purpose.para")}</p>
      <h6>{t("legal:dataPrivacy.tools.google.duration.header")}</h6>
      <p>{t("legal:dataPrivacy.tools.google.duration.para")}</p>
      <h6>{t("legal:dataPrivacy.tools.google.possibility.header")}</h6>
      <p>{t("legal:dataPrivacy.tools.google.possibility.para1")}</p>
      <p>{t("legal:dataPrivacy.tools.google.possibility.para2")}</p>
      {/*  */}
      <h4>{t("legal:dataPrivacy.tools.font.header")}</h4>
      <h6>{t("legal:dataPrivacy.tools.font.description.header")}</h6>
      <p>{t("legal:dataPrivacy.tools.font.description.para1")}</p>
      <p>{t("legal:dataPrivacy.tools.font.description.para2")}</p>
      <p>
        <strong>
          Fonticons, Inc.,6 Porter Road Apartment 3R, Cambridge, MA 02140, USA.
        </strong>
      </p>
      <p>{t("legal:dataPrivacy.tools.font.description.para3")}</p>
      <p>{t("legal:dataPrivacy.tools.font.description.para4")}</p>
      <p>
        <span>{t("legal:dataPrivacy.tools.font.description.para51")}</span>
        <a href="https://fontawesome.com/tos">
          <strong>https://fontawesome.com/tos</strong>
        </a>
        <span>{t("legal:dataPrivacy.tools.font.description.para52")}</span>{" "}
        <a href="https://fontawesome.com/privacy">
          <strong>https://fontawesome.com/privacy</strong>
        </a>
      </p>
      <h6>{t("legal:dataPrivacy.tools.font.basis.header")}</h6>
      <p>{t("legal:dataPrivacy.tools.font.basis.para")}</p>
      <h6>{t("legal:dataPrivacy.tools.font.purpose.header")}</h6>
      <p>{t("legal:dataPrivacy.tools.font.purpose.para")}</p>
      <h6>{t("legal:dataPrivacy.tools.font.duration.header")}</h6>
      <p>{t("legal:dataPrivacy.tools.font.duration.para")}</p>
      <h6>{t("legal:dataPrivacy.tools.font.possibility.header")}</h6>
      <p>{t("legal:dataPrivacy.tools.font.possibility.para1")}</p>
      <p>
        <span>{t("legal:dataPrivacy.tools.font.possibility.para21")}</span>
        <a href="mailto:privacy@fontawesome.com">
          <strong>privacy@fontawesome.com</strong>
        </a>
        <span>{t("legal:dataPrivacy.tools.font.possibility.para22")}</span>
      </p>
      {/*  */}
      <h3>{t("legal:dataPrivacy:transfer.header")}</h3>
      <p>{t("legal:dataPrivacy:transfer.para1")}</p>
      <p>
        <strong>
          <i>{t("legal:dataPrivacy:transfer.bold1")}</i>
        </strong>
        <span>{t("legal:dataPrivacy:transfer.bold1Text")}</span>
        <a href="https://ec.europa.eu/info/law/law-topic/data-protection/data-transfers-outside-eu/adequacy-protection-personal-data-non-eu-countries_en">
          <strong>
            https://ec.europa.eu/info/law/law-topic/data-protection/data-transfers-outside-eu/adequacy-protection-personal-data-non-eu-countries_en
          </strong>
        </a>
      </p>
      <p>
        <strong>
          <i>{t("legal:dataPrivacy:transfer.bold2")}</i>
        </strong>
        <span>{t("legal:dataPrivacy:transfer.bold2Text")}</span>
        <a href="https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?uri=CELEX%3A32021D0914&locale=en">
          <strong>
            https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?uri=CELEX%3A32021D0914&locale=en
          </strong>
        </a>
      </p>
      <p>
        <strong>
          <i>{t("legal:dataPrivacy:transfer.bold3")}</i>
        </strong>
        <span>{t("legal:dataPrivacy:transfer.bold3Text")}</span>
      </p>
      <p>
        <strong>
          <i>{t("legal:dataPrivacy:transfer.bold4")}</i>
        </strong>
        <span>{t("legal:dataPrivacy:transfer.bold4Text")}</span>
      </p>
      {/*  */}
      <h3>{t("legal:dataPrivacy:rights.header")}</h3>
      <p>{t("legal:dataPrivacy:rights.para")}</p>
      {/*  */}
      <h4>{t("legal:dataPrivacy:rights.revoke.header")}</h4>
      <p>{t("legal:dataPrivacy:rights.revoke.para")}</p>
      <h4>{t("legal:dataPrivacy:rights.information.header")}</h4>
      <p>{t("legal:dataPrivacy:rights.information.para")}</p>
      <ul>
        <li>{t("legal:dataPrivacy:rights.information.bullet1")}</li>
        <li>{t("legal:dataPrivacy:rights.information.bullet2")}</li>
        <li>{t("legal:dataPrivacy:rights.information.bullet3")}</li>
        <li>{t("legal:dataPrivacy:rights.information.bullet4")}</li>
        <li>{t("legal:dataPrivacy:rights.information.bullet5")}</li>
        <li>{t("legal:dataPrivacy:rights.information.bullet6")}</li>
        <li>{t("legal:dataPrivacy:rights.information.bullet7")}</li>
        <li>{t("legal:dataPrivacy:rights.information.bullet8")}</li>
      </ul>
      {/*  */}
      <h4>{t("legal:dataPrivacy:rights.correction.header")}</h4>
      <p>{t("legal:dataPrivacy:rights.correction.para1")}</p>
      <p>{t("legal:dataPrivacy:rights.correction.para2")}</p>
      <ul>
        <li>{t("legal:dataPrivacy:rights.correction.bullet1")}</li>
        <li>{t("legal:dataPrivacy:rights.correction.bullet2")}</li>
        <li>{t("legal:dataPrivacy:rights.correction.bullet3")}</li>
        <li>{t("legal:dataPrivacy:rights.correction.bullet4")}</li>
        <li>{t("legal:dataPrivacy:rights.correction.bullet5")}</li>
        <li>{t("legal:dataPrivacy:rights.correction.bullet6")}</li>
      </ul>
      <p>{t("legal:dataPrivacy:rights.correction.para3")}</p>
      <p>
        <span>{t("legal:dataPrivacy:rights.correction.para41")}</span>
        <span>
          <strong>{t("legal:dataPrivacy:rights.correction.para42")}</strong>
        </span>
        <span>{t("legal:dataPrivacy:rights.correction.para43")}</span>
      </p>
      <ul>
        <li>{t("legal:dataPrivacy:rights.correction.bullet7")}</li>
        <li>{t("legal:dataPrivacy:rights.correction.bullet8")}</li>
        <li>{t("legal:dataPrivacy:rights.correction.bullet9")}</li>
        <li>{t("legal:dataPrivacy:rights.correction.bullet10")}</li>
        <li>{t("legal:dataPrivacy:rights.correction.bullet11")}</li>
      </ul>
      {/*  */}
      <h4>{t("legal:dataPrivacy:rights.restriction.header")}</h4>
      <p>{t("legal:dataPrivacy:rights.restriction.para1")}</p>
      <ul>
        <li>{t("legal:dataPrivacy:rights.restriction.bullet1")}</li>
        <li>{t("legal:dataPrivacy:rights.restriction.bullet2")}</li>
        <li>{t("legal:dataPrivacy:rights.restriction.bullet3")}</li>
        <li>{t("legal:dataPrivacy:rights.restriction.bullet4")}</li>
      </ul>
      <p>{t("legal:dataPrivacy:rights.restriction.para2")}</p>
      <p>{t("legal:dataPrivacy:rights.restriction.para3")}</p>
      {/*  */}
      <h4>{t("legal:dataPrivacy:rights.information2.header")}</h4>
      <p>{t("legal:dataPrivacy:rights.information2.para1")}</p>
      <p>{t("legal:dataPrivacy:rights.information2.para2")}</p>
      {/*  */}
      <h4>{t("legal:dataPrivacy:rights.portability.header")}</h4>
      <p>{t("legal:dataPrivacy:rights.portability.para1")}</p>
      <ul>
        <li>{t("legal:dataPrivacy:rights.portability.bullet1")}</li>
        <li>{t("legal:dataPrivacy:rights.portability.bullet2")}</li>
      </ul>
      <p>{t("legal:dataPrivacy:rights.portability.para2")}</p>
      <p>{t("legal:dataPrivacy:rights.portability.para3")}</p>
      {/*  */}
      <h4>{t("legal:dataPrivacy:rights.object.header")}</h4>
      <p>{t("legal:dataPrivacy:rights.object.para1")}</p>
      <p>{t("legal:dataPrivacy:rights.object.para2")}</p>
      {/*  */}
      <h4>{t("legal:dataPrivacy:rights.complain.header")}</h4>
      <p>{t("legal:dataPrivacy:rights.complain.para1")}</p>
      <p>{t("legal:dataPrivacy:rights.complain.para2")}</p>
      {/*  */}
      <h3>{t("legal:dataPrivacy:excercise.header")}</h3>
      <p>{t("legal:dataPrivacy:excercise.para1")}</p>
      <p>Kemal Webersohn von der WS Datenschutz GmbH</p>
      <p>
        <strong>
          <a href="mailto:clubdialog@ws-datenschutz.de">
            clubdialog@ws-datenschutz.de
          </a>
        </strong>
      </p>
      <p>{t("legal:dataPrivacy:excercise.para2")}</p>
      <p>WS Datenschutz GmbH</p>
      <p>Dircksenstraße 51</p>
      <p>D-10178 Berlin</p>

      {/*  */}
      <h3>{t("legal:dataPrivacy:change.header")}</h3>
      <p>{t("legal:dataPrivacy:change.para1")}</p>
      <p>{t("legal:dataPrivacy:change.para2")}</p>
    </div>
  );
}

export default DataPrivacy;
