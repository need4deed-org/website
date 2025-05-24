import styled from "styled-components";
import Header from "./Header";
import { FullWidthContainer, SectionContainer } from "../styled/containers";
import CarouselCard from "./CarouselCard";
import { IconName } from "./icon";

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
        {/* TODO: Below card data are just for test, will be removed later */}
        <CarouselCard
          index={1}
          iconName={IconName.ListChecks}
          infoTexts={[
            "Apply for a Certificate of Good Conduct individually or with the help of Need4Deed",
            "Obtain a measles vaccination",
          ]}
          title="Sign Up"
          week="WEEK 1"
          key={1}
        />
        <CarouselCard
          index={2}
          iconName={IconName.AddressBook}
          infoTexts={[
            "Apply for a Certificate of Good Conduct individually or with the help of Need4Deed",
          ]}
          title="Sign Up"
          week="WEEK 3-4"
          key={2}
        />
      </SectionContainer>
    </ProcessStepsFWContainer>
  );
}

export default ProcessStepsSection;
