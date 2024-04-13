import { useTranslation } from "react-i18next";
import "./Footer.css";

function Footer() {
  const { t } = useTranslation();
  const aboutUsLinkProps = { href: "#" };
  const legalNoticeLinkProps = {
    href: "https://bevos.org/impressum/",
    target: "_blank",
  };
  const privacyLinkProps = {
    href: "https://bevos.org/datenschutzerklaerung/",
    target: "_blank",
  };
  const mailToLinkProps = {
    href: "mailto:info@need4deed.org",
    target: "_blank",
    rel: "noopener noreferrer",
  };

  const email = "info@need4deed.org";

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h6>{t("footer.aboutUs.aboutUsHeading")}</h6>
          <ul>
            <li>
              <a {...aboutUsLinkProps}>{t("footer.aboutUs.project")}</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h6>{t("footer.legal.legalHeading")}</h6>
          <ul>
            <li>
              <a {...legalNoticeLinkProps}>{t("footer.legal.impressum")}</a>
            </li>
            <li>
              <a {...privacyLinkProps}>{t("footer.legal.dataPrivacy")}</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h6>{t("footer.contact.contactHeading")}</h6>
          <ul>
            <li>
              <a {...mailToLinkProps}>
                {`${t("footer.contact.email")}: ${email}`}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
