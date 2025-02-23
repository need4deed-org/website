import styled from "styled-components";
import CategoryCard from "./CategoryCard";

const CategoriesSectionContainer = styled.div`
  display: grid;
  gap: 32px;
  width: var(--max-width-section); // Use the CSS variable for width
  margin: 0 auto; // Center the grid

  /* Responsive Grid (using the same breakpoints as index.css) */
  @media (min-width: 360px) {
    grid-template-columns: repeat(1, 378px); // 1 column (mobile)
    grid-template-rows: repeat(6, 350px);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 378px); // 3 columns (tablet)
    grid-template-rows: repeat(2, 350px);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(
      3,
      378px
    ); // 3 columns (desktop - adjust as needed)
    grid-template-rows: repeat(2, 350px);
  }
`;

function Categories() {
  return (
    <CategoriesSectionContainer>
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </CategoriesSectionContainer>
  );
}

export default Categories;
