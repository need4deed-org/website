import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";

import CookieConsentBanner from "../CookieConsentBanner";
import { Subpages } from "../../config/types";
import Sponsors from "../Sponsors/Sponsors";
import "./Footer.css";

interface Props {
  showSponsors?: boolean;
}

function Footer({ showSponsors = true }: Props) {
  const { t, i18n } = useTranslation();
  const email = "info@need4deed.org";

  return (
    <>
      {showSponsors && <Sponsors wrappingClassName="wrapper" />}
      <CookieConsentBanner />
      <footer>
        <div className="footer-container">
          <div className="footer-column">
            <h6>{t("footer.aboutUs.aboutUsHeading")}</h6>
            <ul>
              <li>
                <HashLink smooth to={`/${i18n.language}#about-project`}>
                  {t("footer.aboutUs.project")}
                </HashLink>
              </li>
              <li>
                <HashLink smooth to={`/${Subpages.FAQS}/${i18n.language}`}>
                  {t("faqs.faqs")}
                </HashLink>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h6>{t("footer.legal.legalHeading")}</h6>
            <ul>
              <li>
                <a href={`/${Subpages.NOTICE}/${i18n.language}`}>
                  {t("footer.legal.impressum")}
                </a>
              </li>
              <li>
                <a href={`/${Subpages.DATA_PROTECTION}/${i18n.language}`}>
                  {t("footer.legal.dataPrivacy")}
                </a>
              </li>
              <li>
                <a href={`/${Subpages.AGREEMENT}/${i18n.language}`}>
                  {t("footer.legal.agreement")}
                </a>
              </li>
              <li>
                <a href={`/${Subpages.COOKIES}/${i18n.language}`}>
                  {t("footer.legal.cookies")}
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h6>{t("footer.contact.contactHeading")}</h6>
            <ul>
              <li>
                <a
                  href="mailto:info@need4deed.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
