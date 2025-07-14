import { useTranslation } from "react-i18next";

import useMatchMedia from "../../hooks/useMatchMedia";
import { getImageUrl } from "../../utils";
import "./Main.css";

const urlLogoHorizontal = getImageUrl("N4D-logo-purple-on-transparent-h.webp");
const urlLogoStacked = getImageUrl("N4D-logo-purple-on-transparent-s.webp");

function Main() {
  const { t } = useTranslation();
  const isMobile = useMatchMedia("(max-width: 576px)");

  return (
    <div className="main-container">
      <div className="main-text-container">
        <img
          src={isMobile ? urlLogoStacked : urlLogoHorizontal}
          alt="NEED 4 DEED"
        />
        <h5>{t("projectIntro.slogan")}</h5>
      </div>
    </div>
  );
}

export default Main;
