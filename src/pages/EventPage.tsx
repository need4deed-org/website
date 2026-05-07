import styled from "styled-components";

import { StaticPageLayout } from "../components/Layouts/staticPageLayout";

const REGISTRATION_URL = "https://forms.gle/hFJTszu4tCoeDRy4A";

const Container = styled.div`
  max-width: 680px;
  margin: 60px auto;
  padding: 0 24px;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 24px;
`;

const Meta = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 32px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MetaItem = styled.li`
  font-size: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 40px;
`;

const RegisterButton = styled.a`
  display: inline-block;
  background: var(--color-primary, #7c3aed);
  color: #fff;
  padding: 14px 32px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;

  &:hover {
    opacity: 0.88;
  }
`;

export default function EventPage() {
  return (
    <StaticPageLayout>
      <Container>
        <Title>VolunTea</Title>
        <Meta>
          <MetaItem>📅 Donnerstag, 05.06.2026 &mdash; 17:30&ndash;19:30 Uhr (Einlass ab 17:00)</MetaItem>
          <MetaItem>📍 Art Space in Exile, Elsenstraße 87, 12435 Berlin</MetaItem>
          <MetaItem>👥 Für Freiwillige, die Geflüchtete unterstützen</MetaItem>
          <MetaItem>🗣️ Sprache: Deutsch</MetaItem>
        </Meta>
        <Description>
          Ein kleines Treffen für Freiwillige, um Erfahrungen auszutauschen und
          mehr darüber zu erfahren, wie man Menschen in Not in Berlin
          unterstützen kann. Ob du schon aktiv bist oder erst anfangen möchtest
          &mdash; komm vorbei, triff das Team und andere Freiwillige, und lass
          dich inspirieren.
        </Description>
        <RegisterButton href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
          Jetzt anmelden
        </RegisterButton>
      </Container>
    </StaticPageLayout>
  );
}
