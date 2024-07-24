import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";

import Sponsors from "../Sponsors/Sponsors";
import "./Footer.css";

interface Props {
  showSponsors?: boolean;
}

function Footer({ showSponsors = true }: Props) {
  const { t, i18n } = useTranslation();
  const aboutUsLinkProps = {
    smooth: true,
    to: `/${i18n.language}#about-project`,
  };
  const legalNoticeLinkProps = {
    href: `/impressum/${i18n.language}`,
  };
  const privacyLinkProps = {
    href: `/datenschutzerklaerung/${i18n.language}`,
  };
  const mailToLinkProps = {
    href: "mailto:info@need4deed.org",
    target: "_blank",
    rel: "noopener noreferrer",
  };

  const email = "info@need4deed.org";

  return (
    <>
      {showSponsors && <Sponsors wrappingClassName="wrapper" />}
      <footer>
        <div className="footer-container">
          <div className="footer-column">
            <h6>{t("footer.aboutUs.aboutUsHeading")}</h6>
            <ul>
              <li>
                <HashLink {...aboutUsLinkProps}>
                  {t("footer.aboutUs.project")}
                </HashLink>
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
    </>
  );
}

export default Footer;
