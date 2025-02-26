import styled from "styled-components";

// export const AppContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh;
// `;

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

export const SectionContainer = styled.section`
  padding: 0 1rem;
  margin: 0 auto;
  max-width: var(--max-width-section, 1440px);
  width: 100%;
`;

// TODO: add containers into here
