import styled from "styled-components";
import { useState } from "react";
import { Lang } from "../../config/types";
import { CustomHeading } from "../styled/text";
import Arrow from "../svg/Arrow";

interface Props {
  selectedLang: Lang;
  onChange: (lang: Lang) => void;
}

const languageOptions = [
  { value: Lang.DE, label: "Deutsche" },
  { value: Lang.EN, label: "English" },
];

const languageLabelMap = languageOptions.reduce(
  (obj, cur) => ({
    ...obj,
    [cur.value]: cur.label,
  }),
  {},
) as Record<Lang, string>;

const LanguageSwitcherDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: transparent;
`;

const LanguageOptionsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const OptionButton = styled.button`
  background: "var(--color-sand)";
  border-color: transparent;
  border-radius: 4px;
`;

const SelectedLanguageDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  min-width: 95px;
`;

export default function LanguageSwitcher({ selectedLang, onChange }: Props) {
  const visibleLangOptions = languageOptions.filter(
    (o) => o.value !== selectedLang,
  );

  const [isOptionsVisible, setIsOptionsVisible] = useState<boolean>(false);

  const handleLangChange = (lang: Lang) => {
    onChange(lang);
    setIsOptionsVisible(false);
  };

  return (
    <LanguageSwitcherDiv>
      <SelectedLanguageDiv
        onClick={() => setIsOptionsVisible(!isOptionsVisible)}
      >
        <CustomHeading
          color="white"
          fontSize="16px"
          fontWeight={600}
          letterSpacing="0px"
          lineheight="16px"
          margin={0}
        >
          {languageLabelMap[selectedLang]}
        </CustomHeading>

        <Arrow
          direction={isOptionsVisible ? "up" : "down"}
          onClick={() => setIsOptionsVisible(!isOptionsVisible)}
        />
      </SelectedLanguageDiv>

      {isOptionsVisible && (
        <LanguageOptionsDiv>
          {visibleLangOptions.map((o) => (
            <OptionButton
              key={o.value}
              onClick={() => handleLangChange(o.value)}
            >
              <CustomHeading
                color="var(--color-aubergine-light)"
                fontSize="16px"
                fontWeight={600}
                letterSpacing="0px"
                lineheight="16px"
                margin={0}
              >
                {languageLabelMap[o.value]}
              </CustomHeading>
            </OptionButton>
          ))}
        </LanguageOptionsDiv>
      )}
    </LanguageSwitcherDiv>
  );
}
