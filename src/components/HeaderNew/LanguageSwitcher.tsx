import { Lang } from "need4deed-sdk";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { setStoredLang } from "../../utils";
import MenuItem from "./MenuItem";

const LanguageSwitcherContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  gap: var(--homepage-hero-section-language-switcher-gap);
  width: var(--homepage-hero-section-language-switcher-width);
`;

const LanguageSelectionDiv = styled.div`
  cursor: pointer;
  min-width: var(--homepage-hero-section-language-selection-min-width);
`;

const en = "ENGLISH";
const de = "DEUTSCH";

interface Props {
  textColor?: string;
}

export default function LanguageSwitcher({ textColor }: Props) {
  const { i18n } = useTranslation();

  const handleLangChange = (lang: Lang) => {
    i18n.changeLanguage(lang);
    setStoredLang(lang);
  };

  const selectedLangTextColor = textColor;

  return (
    <LanguageSwitcherContainer>
      <LanguageSelectionDiv
        onClick={() =>
          handleLangChange(i18n.language === Lang.EN ? Lang.DE : Lang.EN)
        }
      >
        <MenuItem
          text={i18n.language === Lang.EN ? de : en}
          color={selectedLangTextColor}
        />
      </LanguageSelectionDiv>
    </LanguageSwitcherContainer>
  );
}
