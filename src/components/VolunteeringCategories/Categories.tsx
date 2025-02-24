import styled from "styled-components";
import {
  Baby,
  Bicycle,
  CalendarStar,
  ChatsTeardrop,
  PingPong,
  Users,
} from "@phosphor-icons/react";
import CategoryCard from "./CategoryCard";

const iconSize = 48;
const iconColor = "var(--color-papaya)";

const categories = [
  {
    icon: <ChatsTeardrop size={iconSize} color={iconColor} />,
    title: "German Language Support",
    description:
      "Fluent in German? Support refugees by teaching german at language cafes and tutoring privately or in groups.",
  },
  {
    icon: <Baby size={iconSize} color={iconColor} />,
    title: "Childcare",
    description:
      "We are looking for volunteers to support children in refugee accommodation centers by assisting in daycare or helping with homework. Experience with children is a plus!",
  },
  {
    icon: <Bicycle size={iconSize} color={iconColor} />,
    title: "Skills Based Volunteering",
    description:
      "Some opportunities may offer a chance to use your special expertise, such as bike repair, gardening, musical skills, or organizational savvy.",
  },
  {
    icon: <CalendarStar size={iconSize} color={iconColor} />,
    title: "Events",
    description:
      "Occasionally events require unique support from volunteers. These might be festivals, dinners, outings, cultural activities, a day of setting up a clothes sorting station, gardening, or a workshop. ",
  },
  {
    icon: <PingPong size={iconSize} color={iconColor} />,
    title: "Sports activities",
    description:
      "We are always looking for volunteers to help us organize sports activities for children, teenagers or adults in accommodation centers.",
  },
  {
    icon: <Users size={iconSize} color={iconColor} />,
    title: "Accompany a Refugee",
    description:
      "Fluent in German and a second language? Support individuals in dealing with bureaucracy at appointments - going with them to the doctor, Job Centre or otherwise.",
  },
];

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
      {categories.map((category) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <CategoryCard key={category.title} {...category} />
      ))}
    </CategoriesSectionContainer>
  );
}

export default Categories;
