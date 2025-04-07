import styled from "styled-components";

import { Testimonial } from "../../config/types";
import ActivitiesChipList from "../ActivitiesChipList";
import { BaseCard, IconAvatar } from "../styled/containers";
import { Heading3, Paragraph } from "../styled/text";

const Card = styled(BaseCard)`
  background-color: var(--color-magnolia);
  width: var(--homepage-volunteering-opportunity-card-width);
  height: var(--homepage-volunteering-opportunity-card-height);
  padding-top: var(--homepage-volunteering-opportunity-card-padding-top);
  padding-right: var(--homepage-volunteering-opportunity-card-padding-right);
  padding-bottom: var(--homepage-volunteering-opportunity-card-padding-bottom);
  padding-left: var(--homepage-volunteering-opportunity-card-padding-left);
  gap: var(--homepage-volunteering-opportunity-card-gap);
`;
const quote = "“";

interface Props {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <Card style={{ backgroundColor: "var(--color-orchid-dark)" }}>
      <div>
        <IconAvatar id="person-avatar">
          <img src={testimonial.pic} alt="person-avatar" />
        </IconAvatar>
      </div>
      <Heading3>{testimonial.name}</Heading3>
      <Paragraph>{`${quote}${testimonial.translated_text}${quote}`}</Paragraph>
      <ActivitiesChipList activities={testimonial.activities} />
    </Card>
  );
}
