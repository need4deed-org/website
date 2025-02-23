import styled from "styled-components";

// const Card = styled.div`
//   width: 378px;
//   height: 350px;
//   border-radius: 24px;
//   background-color: var(--color-sand);
// `;

const Card = styled.div`
  width: 378px;
  height: 350px;
  border-radius: 24px;
  background-color: var(--color-sand);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Paragraph = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  width: 100%;
  color: var(--color-midnight);
`;

export default function CategoryCard() {
  return (
    <Card>
      <Paragraph>Deneme</Paragraph>
    </Card>
  );
}
