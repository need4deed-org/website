import { useTranslation } from "react-i18next";
import "./Footer.css";

function Footer() {
  const { t } = useTranslation();
  const legalNoticeLink = "https://bevos.org/impressum/";
  const privacyLink = "https://bevos.org/datenschutzerklaerung/";


  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h6>{t("footer.aboutUs.aboutUsHeading")}</h6>
          <ul>
            <li>
              <a href="#about-project">{t("footer.aboutUs.project")}</a>
            </li>
            <li>
              <a href="#volunteer-opportunities">{t("workingWithRefugees")}</a>
            </li>
            <li>
              <a href="#">{t("footer.aboutUs.aboutUs")}</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h6>{t("footer.legal.legalHeading")}</h6>
          <ul>
            <li>
              <a href= {legalNoticeLink}>{t("footer.legal.impressum")}</a>
            </li>
            <li>
              <a href= {privacyLink}>{t("footer.legal.dataPrivacy")}</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h6>{t("footer.contact.contactHeading")}</h6>
          <ul>
            <li>
              {t("footer.contact.email")}
              {/* Maybe add something that opens the email in the user's email client */}
              <a href="">info@need4deed.org</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
