import styled from "styled-components";

const HeadingSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;

const Headline = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: var(--color-midnight);
  flex-grow: 1;
  width: 100%;
`;

const Paragraph = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  width: 100%;
  color: var(--color-midnight);
`;

function HeadingSection() {
  return (
    <HeadingSectionContainer>
      <Headline>Ways you can volunteer</Headline>
      <Paragraph>
        We offer various types of volunteer opportunities with refugee
        accommodation centers, either on a continuous or occasional basis.
      </Paragraph>
    </HeadingSectionContainer>
  );
}

export default HeadingSection;
