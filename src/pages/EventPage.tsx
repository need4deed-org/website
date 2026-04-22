import styled from "styled-components";

import { StaticPageLayout } from "../components/Layouts/staticPageLayout";

const REGISTRATION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSft1xi4NrQB_O6-OyOvVm_HcDSzQtog_3MMj2XAIVNaLKEJxA/viewform?usp=dialog";

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
        <Title>Workshop für Freiwillige</Title>
        <Meta>
          <MetaItem>
            📅 Donnerstag, 07.05.2026 &mdash; 17:30&ndash;19:30 Uhr (Einlass ab
            17:00)
          </MetaItem>
          <MetaItem>
            📍 Art Space in Exile, Elsenstraße 87, 12435 Berlin
          </MetaItem>
          <MetaItem>👥 Für Freiwillige, die Geflüchtete unterstützen</MetaItem>
          <MetaItem>🗣️ Sprache: Deutsch</MetaItem>
        </Meta>
        <Description>
          Unterstützt du geflüchtete Kinder bei den Hausaufgaben oder beim
          Deutschlernen? In diesem kompakten Workshop vermitteln wir das nötige
          Rüstzeug für deine ehrenamtliche Arbeit. Wir zeigen einfache, aber
          effektive pädagogische Methoden, mit denen du Lernblockaden lösen und
          die Konzentration fördern kannst. Der Workshop bietet zudem Raum für
          deine persönlichen Fragen und den Austausch mit anderen Freiwilligen.
        </Description>
        <RegisterButton
          href={REGISTRATION_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Jetzt anmelden
        </RegisterButton>
      </Container>
    </StaticPageLayout>
  );
}
