import styled from "styled-components";

export interface ContainerProps {
  id: string; // Optional id prop
}

export const AppContainer = styled.div.attrs<ContainerProps>((props) => ({
  id: props.id,
}))<ContainerProps>`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
`;

export const SectionContainer = styled.div.attrs<ContainerProps>((props) => ({
  id: props.id,
}))<ContainerProps>`
  padding: 0 1rem;
  margin: 0 auto;
  max-width: var(--max-width-section, 1440px);
  width: 100%;
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

export const IconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--icon-size);
  height: var(--icon-size);

  svg {
    // Target the SVG inside IconDiv
    width: 100%; // Make the SVG fill the IconDiv
    height: 100%;
    fill: var(--icon-color);
  }
`;
