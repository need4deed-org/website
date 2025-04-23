import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { CustomHeading } from "../styled/text";
import N4DLogo from "../svg/N4DLogo";
import { Lang } from "../../config/types";
import LanguageSwitcher from "./LanguageSwitcher";

const HeaderContainer = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  height: 80px;
`;

const MenuItemsDiv = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  width: 680px;
  gap: 10px;
  height: fit-content;
`;

const MenuItem = styled.div`
  cursor: pointer;
  width: fit-content;
`;

function Header() {
  const { t, i18n } = useTranslation();
  const selectedLang = i18n.language as Lang;

  const logoHeight = getComputedStyle(
    document.documentElement,
  ).getPropertyValue("--homepage-hero-section-logo-height");
  const logoWidth = getComputedStyle(document.documentElement).getPropertyValue(
    "--homepage-hero-section-logo-width",
  );

  const menuItems = [
    t("homepage.heroSection.menuItems.about"),
    t("homepage.heroSection.menuItems.volunteeringOpportunities"),
    t("homepage.heroSection.menuItems.events"),
  ];

  return (
    <HeaderContainer id="header-container">
      <N4DLogo height={logoHeight} width={logoWidth} />

      <MenuItemsDiv>
        {menuItems.map((text) => (
          <MenuItem key={text}>
            <CustomHeading
              key={text}
              color="white"
              fontSize="16px"
              fontWeight={600}
              letterSpacing="0px"
              lineheight="16px"
              onClick={() => {}}
            >
              {text}
            </CustomHeading>
          </MenuItem>
        ))}

        <LanguageSwitcher
          selectedLang={selectedLang}
          onChange={(lang) => i18n.changeLanguage(lang)}
        />
      </MenuItemsDiv>
    </HeaderContainer>
  );
}

export default Header;
