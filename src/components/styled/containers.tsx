import styled from "styled-components";

export interface ContainerProps {
  id: string;
  "background-color"?: string;
  gap?: string;
}

export const AppContainer = styled.div.attrs<ContainerProps>((props) => ({
  id: props.id,
}))<ContainerProps>`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  overflow-x: hidden;
`;

export const SectionContainer = styled.div.attrs<ContainerProps>((props) => ({
  id: props.id,
}))<ContainerProps>`
  display: flex;
  flex-direction: column;
  margin: 0 auto; // Center it horizontally
  padding: var(--homepage-section-container-padding);
  gap: var(--homepage-section-container-gap);
  max-width: var(--max-width-section);
  background-color: ${(props) => props["background-color"]};
`;

export const OverlayingSectionContainer = styled(SectionContainer)`
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export const CategoriesContainer = styled.div.attrs<ContainerProps>(
  (props) => ({
    id: props.id,
  }),
)<ContainerProps>`
  display: grid;
  margin: 0 auto; // Center the grid
  grid-template-columns: var(
    --homepage-volunteering-categories-grid-template-columns
  );
  grid-template-rows: var(
    --homepage-volunteering-categories-grid-template-rows
  );
  gap: var(--homepage-volunteering-categories-grid-gap);
`;

// TODO: delete this container after paginated cards container
export const CategoriesContainerMobile = styled.div.attrs<ContainerProps>(
  (props) => ({
    id: props.id,
  }),
)<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: var(--color-magnolia);
`;

export const ArrowsButtonContainer = styled.div.attrs<ContainerProps>(
  (props) => ({
    id: props.id,
  }),
)<ContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`;

export const IndicatorsContainer = styled.div.attrs<ContainerProps>(
  (props) => ({
    id: props.id,
  }),
)<ContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

interface IconDiVProps {
  size?: string;
}

export const IconDiv = styled.div<IconDiVProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${(props) => props.size || "var(--icon-size)"};
  height: ${(props) => props.size || "var(--icon-size)"};

  svg {
    // Target the SVG inside IconDiv
    width: 100%; // Make the SVG fill the IconDiv
    height: 100%;
    fill: var(--icon-color);
  }
`;

export const VolunteeringOpportunitiesContainer = styled.div.attrs<ContainerProps>(
  (props) => ({
    id: props.id,
  }),
)<ContainerProps>`
  display: flex;
  flex-direction: column;
  background-color: var(--color-orchid);
  margin: 0 auto; // Center it horizontally
  padding: var(--homepage-section-container-padding);
  gap: var(--homepage-section-container-gap);
  max-width: var(--max-width-section);
`;

export const OpportunitiesContainer = styled.div.attrs<ContainerProps>(
  (props) => ({
    id: props.id,
  }),
)<ContainerProps>`
  display: grid;
  margin: 0 auto; // Center the grid
  grid-template-columns: var(
    --homepage-volunteering-opportunities-grid-template-columns
  );
  grid-template-rows: var(
    --homepage-volunteering-opportunities-grid-template-rows
  );
  gap: var(--homepage-volunteering-opportunities-grid-gap);
`;

export const FullWidthContainer = styled.div.attrs<ContainerProps>((props) => ({
  id: props.id,
}))<ContainerProps>`
  width: 100%;
  align-items: center;
  background-color: ${(props) => props["background-color"]};
  position: relative;
`;

export const BaseCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: var(--card-border-radius);
`;

export const VolunteeringCategoriesContainer = styled.div.attrs<ContainerProps>(
  (props) => ({
    id: props.id,
  }),
)<ContainerProps>`
  display: flex;
  flex-direction: column;
  background-color: var(--color-magnolia);
  margin: 0 auto; // Center it horizontally
  padding: var(--homepage-section-container-padding);
  gap: var(--homepage-section-container-gap);
  max-width: var(--max-width-section);
`;

export const BaseFooterContainer = styled.div.attrs<ContainerProps>(
  (props) => ({
    id: props.id,
  }),
)<ContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: var(--homepage-section-container-footer-justify-content);
`;

export const ActivitiesContainer = styled.div.attrs<ContainerProps>(
  (props) => ({
    id: props.id,
  }),
)<ContainerProps>`
  display: flex;
  width: fit-content;
  justify-content: left;
  flex-wrap: wrap;
  gap: var(--activities-container-gap);
`;

export const OpportunityDetailsContainer = styled.div.attrs<ContainerProps>(
  (props) => ({
    id: props.id,
  }),
)<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: var(--homepage-volunteering-opportunity-details-gap);
`;

export const PaginatedCardsContainer = styled.div.attrs<ContainerProps>(
  (props) => ({
    id: props.id,
  }),
)<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: var(--paginated-cards-container-gap);
  background-color: ${(props) => props["background-color"]};
`;

export const VisibleCardsContainer = styled.div.attrs<ContainerProps>(
  (props) => ({
    id: props.id,
  }),
)<ContainerProps>`
  display: flex;
  gap: var(--paginated-cards-visible-cards-container-gap);
`;

export const OverlayingVisibleCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--paginated-cards-visible-cards-container-gap);

  /* Add padding or margin to create the "border" effect that extends right */
  padding-right: 9999px; /* A large value to simulate "infinity" */
  margin-right: -9999px; /* Counteract the padding to avoid horizontal scrollbar */
  overflow: hidden; /* Hide the excess content from the padding */
`;

export const NextVisibleCardContainer = styled.div`
  display: flex;
  gap: var(--paginated-cards-visible-cards-container-gap);
  position: relative;

  /* The overlay pseudo-element */
  &::before {
    content: ""; /* Essential for pseudo-elements */
    position: absolute; /* Position the overlay over its parent */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(246, 238, 231, 0.2) 0%,
      rgba(247, 220, 244, 0.8) 34.82%,
      #f7cdff 100%
    );
    pointer-events: none; /* Allows clicks to pass through to the elements beneath */
    z-index: 1;
    border-radius: var(--card-border-radius);
  }
`;
export const SectionHeaderContainer = styled.div.attrs<ContainerProps>(
  (props) => ({
    id: props.id,
  }),
)<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap};
`;

interface NumberingDivProps {
  ["background-color"]?: string;
}

export const NumberingDiv = styled.div<NumberingDivProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--numbering-div-width);
  height: var(--numbering-div-height);
  min-width: var(--numbering-div-width);
  min-height: var(--numbering-div-height);
  border-radius: var(--numbering-div-border-radius);
  background-color: ${(props) =>
    props["background-color"] || "var(--color-orchid-dark)"};
`;
