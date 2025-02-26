import styled from "styled-components";

const HeadingSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;

const Headline = styled.h2`
  font-weight: var(--text-h2-font-weight);
  font-size: var(--text-h2-font-size);
  line-height: var(--text-h2-line-height);
  letter-spacing: var(--text-h2-letter-spacing);
  color: var(--color-midnight);
`;

const Paragraph = styled.p`
  font-weight: var(--text-p-font-weight);
  font-size: var(--text-p-font-size);
  line-height: var(--text-p-line-height);
  letter-spacing: var(--text-p-letter-spacing);
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
