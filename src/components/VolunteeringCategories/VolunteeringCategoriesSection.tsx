import styled from "styled-components";
import Header from "./Header";
import Categories from "./Categories";
import Footer from "./Footer";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-right: 120px;
  padding-left: 120px;
  gap: 56px;
  background-color: var(--color-magnolia);
`;

export function VolunteeringCategoriesSection() {
  return (
    <Section>
      <Header />
      <Categories />
      <Footer />
    </Section>
  );
}

export default VolunteeringCategoriesSection;
