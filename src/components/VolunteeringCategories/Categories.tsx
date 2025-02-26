import styled from "styled-components";

import CategoryCard from "./CategoryCard";
import { IconName } from "../../config/types";

interface Category {
  iconName: IconName;
  title: string;
  description: string;
}

const categories: Category[] = [
  {
    iconName: IconName.ChatsTeardrop,
    title: "German Language Support",
    description:
      "Fluent in German? Support refugees by teaching german at language cafes and tutoring privately or in groups.",
  },
  {
    iconName: IconName.Baby,
    title: "Childcare",
    description:
      "We are looking for volunteers to support children in refugee accommodation centers by assisting in daycare or helping with homework. Experience with children is a plus!",
  },
  {
    iconName: IconName.Bicycle,
    title: "Skills Based Volunteering",
    description:
      "Some opportunities may offer a chance to use your special expertise, such as bike repair, gardening, musical skills, or organizational savvy.",
  },
  {
    iconName: IconName.CalendarStar,
    title: "Events",
    description:
      "Occasionally events require unique support from volunteers. These might be festivals, dinners, outings, cultural activities, a day of setting up a clothes sorting station, gardening, or a workshop. ",
  },
  {
    iconName: IconName.PingPong,
    title: "Sports activities",
    description:
      "We are always looking for volunteers to help us organize sports activities for children, teenagers or adults in accommodation centers.",
  },
  {
    iconName: IconName.Users,
    title: "Accompany a Refugee",
    description:
      "Fluent in German and a second language? Support individuals in dealing with bureaucracy at appointments - going with them to the doctor, Job Centre or otherwise.",
  },
];

const CategoriesContainer = styled.div`
  display: grid;
  gap: 32px;
  /* width: var(--max-width-section); */
  margin: 0 auto; // Center the grid

  /* Responsive Grid (using the same breakpoints as index.css) */

  @media (min-width: 360px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, auto);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
  }
`;

function Categories() {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <CategoryCard key={category.title} {...category} />
      ))}
    </CategoriesContainer>
  );
}

export default Categories;
