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

  /* Responsive Grid (using the same breakpoints as index.css) */
  @media (min-width: 360px) {
    padding: 48px 20px;
    gap: 16px;
  }

  @media (min-width: 768px) {
    padding: 64px 40px;
    gap: 48px;
  }

  @media (min-width: 1440px) {
    padding: 100px 120px;
    gap: 56px;
    max-width: var(--max-width-section);
  }
`;

export const CategoriesContainer = styled.div.attrs<ContainerProps>(
  (props) => ({
    id: props.id,
  }),
)<ContainerProps>`
  display: grid;
  margin: 0 auto; // Center the grid

  /* Responsive Grid (using the same breakpoints as index.css) */
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto);
    gap: 24px;
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 32px;
    max-width: var(--max-width-section);
  }
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
