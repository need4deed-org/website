import { useTranslation } from "react-i18next";
import "./Footer.css";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h6>{t("footer.aboutUs.aboutUsHeading")}</h6>
          <ul>
            <li>
              <a href="#">{t("footer.aboutUs.project")}</a>
            </li>
            <li>
              <a href="#">{t("workingWithRefugees")}</a>
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
              <a href="#">{t("footer.legal.impressum")}</a>
            </li>
            <li>
              <a href="#">{t("footer.legal.dataPrivacy")}</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h6>{t("footer.contact.contactHeading")}</h6>
          <ul>
            <li>
              {t("footer.contact.email")}
              <a href="info@need4deed.org">info@need4deed.org</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
