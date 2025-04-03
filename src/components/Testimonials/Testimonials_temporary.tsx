import { useTranslation } from "react-i18next";
import styled from "styled-components";
import useTestimonials from "../../hooks/api/useTestimonials";
import { Lang } from "../../config/types";
import TestimonialCard from "./TestimonialCard";

const StyledDiv = styled.div`
  padding: 24px;
  flex-direction: row;
  display: flex;
  gap: 12px;
`;

export default function Testimonials() {
  const { i18n } = useTranslation();
  const [testimonials] = useTestimonials(i18n.language as Lang);

  return (
    <StyledDiv>
      {Array.isArray(testimonials) &&
        // eslint-disable-next-line react/jsx-props-no-spreading
        testimonials.map((t) => <TestimonialCard {...t} key={t.name} />)}
    </StyledDiv>
  );
}
