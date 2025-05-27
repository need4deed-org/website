import styled from "styled-components";
import Header from "./Header";
import { FullWidthContainer, SectionContainer } from "../styled/containers";
import Steps from "./Steps";

const ProcessStepsFWContainer = styled(FullWidthContainer)`
  background: linear-gradient(
    180deg,
    var(--color-magnolia)-5.53%,
    var(--color-orchid-dark) 100%
  );
`;

const ProcessStepsSectionContainer = styled(SectionContainer)`
  gap: var(--homepage-process-section-gap);
`;

export function ProcessStepsSection() {
  return (
    <ProcessStepsFWContainer id="process-steps-section-FWContainer">
      <ProcessStepsSectionContainer id="process-steps-section-container">
        <Header />
        <Steps />
      </ProcessStepsSectionContainer>
    </ProcessStepsFWContainer>
  );
}

export default ProcessStepsSection;
