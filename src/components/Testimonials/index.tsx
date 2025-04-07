import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { Lang } from "../../config/types";
import useTestimonials from "../../hooks/api/useTestimonials";
import { FullWidthContainer, SectionContainer } from "../styled/containers";
import { Heading2 } from "../styled/text";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  const { i18n } = useTranslation();
  const [testimonials, isLoading] = useTestimonials(i18n.language as Lang);

  if (isLoading) return <div>Loading...</div>;
  if (!testimonials || testimonials.length === 0)
    return <div>No testimonials found</div>;
  if (testimonials.length > 0) {
    return (
      <FullWidthContainer id="" background-color="var(--color-magnolia)">
        <SectionContainer id="">
          <Heading2>{t("homepage.testimonials.header")}</Heading2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "2rem",
            }}
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard testimonial={testimonial} />
            ))}
          </div>
        </SectionContainer>
      </FullWidthContainer>
    );
  }
}
