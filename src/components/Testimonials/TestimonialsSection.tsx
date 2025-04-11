import { FullWidthContainer, SectionContainer } from "../styled/containers";
import Header from "./Header";
import Testimonials from "./Testimonials";

export function TestimonialsSection() {
  return (
    <FullWidthContainer
      id="testimonials-fullWidthContainer"
      background-color="var(--color-magnolia)"
    >
      <SectionContainer id="testimonials-container">
        <Header />
        <Testimonials />
      </SectionContainer>
    </FullWidthContainer>
  );
}

export default TestimonialsSection;
