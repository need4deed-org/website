import styled from "styled-components";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getRegisterCtaUrl } from "../../utils";
import { Button } from "../core/button";
import Popup from "../Popup";
import { ATag } from "../styled/tags";
import { Paragraph } from "../styled/text";
import CloseIcon from "../svg/CloseIcon";
import OpportunityCard from "./OpportunityCard";
import { Opportunity } from "./types";
import { CategoryTitle, getIconName } from "./utils";

const DimmedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-dimmed-background);
  display: grid;
  place-items: center;
  z-index: 1;
`;

interface PopupCardProps extends React.CSSProperties {}

const PopupCard = styled(Popup)<PopupCardProps>`
  position: relative;

  > button {
    position: absolute;
    top: var(--page-opportunity-popup-card-x-margins);
    right: var(--page-opportunity-popup-card-x-margins);
    padding: 0;
    color: var(--n4d-neutral-500);
    background: unset;
    border: unset;
    border-radius: 50%;
    margin-inline-start: auto;
  }
`;

interface CTAsContainerProps extends React.CSSProperties {}

const CTAsContainer = styled.div<CTAsContainerProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  justify-content: space-between;
  gap: var(--page-opportunity-popup-ctas-gap);
  margin-top: var(--page-opportunity-popup-ctas-margin-top);
  > span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    text-align: center;
  }
`;

interface CTAsProps extends React.CSSProperties {
  opportunity: Opportunity;
}

function CTAs({ flexDirection, opportunity }: CTAsProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <CTAsContainer flexDirection={flexDirection}>
      <span>
        <Paragraph fontSize="20px" fontWeight={600}>
          {t("opportunityPage.popup.register.title")}
        </Paragraph>
        <Button
          text={t("opportunityPage.popup.register.button")}
          onClick={() => {
            navigate(
              getRegisterCtaUrl({
                id: opportunity.id,
                title: opportunity.title,
              }),
            );
          }}
        />
      </span>
      <span>
        <Paragraph fontSize="20px" fontWeight={600}>
          {t("opportunityPage.popup.apply.title")}
        </Paragraph>
        <ATag href="mailto:volunteer@need4deed.org">
          <Button
            text={t("opportunityPage.popup.apply.button")}
            textColor="var(--color-midnight)"
            backgroundcolor="var(--color-orchid)"
            onClick={() => {}}
          />
        </ATag>
      </span>
    </CTAsContainer>
  );
}

interface Props {
  opportunity: Opportunity;
  close?: () => void;
}

export default function OpportunityCardPopup({
  opportunity,
  close = () => {},
}: Props) {
  const iconName = getIconName(opportunity.categoryId as CategoryTitle);

  return (
    <DimmedBackground>
      <PopupCard className="none" close={close} closeComponent={<CloseIcon />}>
        <OpportunityCard
          width="var(--page-opportunity-popup-card-width)"
          height="var(--page-opportunity-popup-card-height)"
          backgroundColor="var(--color-white)"
          iconName={iconName}
          opportunity={opportunity}
          vo
          CTAs={CTAs}
        />
      </PopupCard>
    </DimmedBackground>
  );
}
