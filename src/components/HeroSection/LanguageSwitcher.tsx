import styled from "styled-components";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Lang, ScreenTypes } from "../../config/types";
import { CustomHeading } from "../styled/text";
import Arrow from "../svg/Arrow";
import MenuItem from "./MenuItem";
import useScreenType from "../../hooks/useScreenType";

const languageOptions = [
  { value: Lang.DE, label: "DEUTSCH" },
  { value: Lang.EN, label: "ENGLISH " },
];

const languageLabelMap = languageOptions.reduce(
  (obj, cur) => ({
    ...obj,
    [cur.value]: cur.label,
  }),
  {},
) as Record<Lang, string>;

const LanguageSwitcherContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  gap: var(--homepage-hero-section-language-switcher-gap);
  width: var(--homepage-hero-section-language-switcher-width);
`;

const LanguageSelectionDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--homepage-hero-section-language-selection-gap);
  align-items: center;
  cursor: pointer;
  justify-content: left;
  min-width: var(--homepage-hero-section-language-selection-min-width);
`;

const LanguageOptionsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--homepage-hero-section-language-switcher-gap);
`;

const OptionButton = styled.button`
  background: var(
    --homepage-hero-section-language-option-button-background-color
  );
  border-color: transparent;
  border-radius: var(--homepage-hero-section-language-option-button-radius);
`;

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOptionsVisible, setIsOptionsVisible] = useState<boolean>(false);
  const screenType = useScreenType();

  const selectedLang = i18n.language as Lang;

  const visibleLangOptions = languageOptions.filter(
    (o) => o.value !== selectedLang,
  );

  const handleLangChange = (lang: Lang) => {
    i18n.changeLanguage(lang);
    setIsOptionsVisible(false);
  };

  const selectedLangTextColor =
    screenType !== ScreenTypes.MOBILE && isOptionsVisible
      ? "var(--color-orchid-dark)"
      : "";

  return (
    <LanguageSwitcherContainer>
      <LanguageSelectionDiv
        onClick={() => setIsOptionsVisible(!isOptionsVisible)}
      >
        <MenuItem
          text={languageLabelMap[selectedLang]}
          color={selectedLangTextColor}
        />
        <Arrow direction={isOptionsVisible ? "up" : "down"} />
      </LanguageSelectionDiv>

      {isOptionsVisible && (
        <LanguageOptionsDiv>
          {visibleLangOptions.map((o) => (
            <OptionButton
              key={o.value}
              onClick={() => handleLangChange(o.value)}
            >
              <CustomHeading
                color="var(--homepage-hero-section-language-option-button-text-color)"
                fontSize="var(--homepage-hero-section-header-menu-item-fontSize)"
                fontWeight="var(--homepage-hero-section-header-menu-item-fontWeight)"
                letterSpacing="var(--homepage-hero-section-header-menu-item-letterSpacing)"
                lineheight="var(--homepage-hero-section-header-menu-item-lineheight)"
                margin={0}
              >
                {languageLabelMap[o.value]}
              </CustomHeading>
            </OptionButton>
          ))}
        </LanguageOptionsDiv>
      )}
    </LanguageSwitcherContainer>
  );
}
