import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 378px;
  height: 350px;
  border-radius: 24px;
  background-color: var(--color-sand);
  gap: 24px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 48px;
  padding-left: 32px;
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.5%;
  color: var(--color-midnight);
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  width: 100%;
  color: var(--color-midnight);
  letter-spacing: 0.5%;
`;

const IconDiv = styled.div`
  height: 48px;
  width: 48px;
`;

interface Props {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function CategoryCard({ icon, title, description }: Props) {
  return (
    <Card>
      <IconDiv>{icon}</IconDiv>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
}
