import styled from "styled-components";
import { BaseCard } from "../styled/containers";
import { Testimonial } from "../../config/types";
import { Heading3, Paragraph } from "../styled/text";
import { Activities } from "../core/common";
import { CirclePic } from "../styled/img";

const Card = styled(BaseCard)`
  background-color: var(--color-orchid-dark);
  width: var(--homepage-testimonial-card-width);
  padding-top: var(--homepage-testimonial-card-padding-top);
  padding-right: var(--homepage-testimonial-card-padding-right);
  padding-bottom: var(--homepage-testimonial-card-padding-bottom);
  padding-left: var(--homepage-testimonial-card-padding-left);
  gap: var(--homepage-testimonial-card-gap);
`;

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: var(--homepage-testimonials-profile-width);
  height: var(--homepage-testimonials-profile-height);
  gap: var(--homepage-testimonials-profile-gap);
`;

export default function TestimonialCard({
  activities,
  name,
  pic,
  translated_text,
}: Testimonial) {
  return (
    <Card>
      <Profile>
        {pic && <CirclePic src={pic} />}
        <Heading3>{name}</Heading3>
      </Profile>

      <Paragraph
        fontSize="var(--homepage-testimonial-card-text-p-font-size)"
        fontWeight={400}
        lineheight="var(--homepage-testimonial-card-text-p-line-height)"
      >
        {`“${translated_text}“`}
      </Paragraph>

      <Activities activities={activities} />
    </Card>
  );
}
