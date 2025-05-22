import styled from "styled-components";
import Header from "./Header";
import { FullWidthContainer, SectionContainer } from "../styled/containers";

const ProcessStepsFWContainer = styled(FullWidthContainer)`
  background: linear-gradient(
    180deg,
    var(--color-magnolia)-5.53%,
    var(--color-orchid-dark) 100%
  );
`;

export function ProcessStepsSection() {
  return (
    <ProcessStepsFWContainer id="process-steps-section-FWContainer">
      <SectionContainer id="process-steps-section-container">
        <Header />
      </SectionContainer>
    </ProcessStepsFWContainer>
  );
}

export default ProcessStepsSection;
