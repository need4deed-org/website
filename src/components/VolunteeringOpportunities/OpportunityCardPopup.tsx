import styled from "styled-components";

import Popup from "../Popup";
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
`;

interface PopupCardProps extends React.CSSProperties {}

const PopupCard = styled(Popup)<PopupCardProps>`
  position: relative;
  width: ${({ width }) => width || "80%"}
  background-color: var(--color-white);
  padding: 20px;
  border-radius: 8px;
  box-shadow: var(--shadow-popup);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
  button {
    position: absolute;
    top: 58px;
    right: 54px;
    padding: 0;
    color: var(--n4d-neutral-500);
    background: unset;
    border: unset;
    border-radius: 50%;
    margin-inline-start: auto;
  }
`;

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
          iconName={iconName}
          opportunity={opportunity}
          vo
        />
      </PopupCard>
    </DimmedBackground>
  );
}
