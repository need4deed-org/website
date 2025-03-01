import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import CategoriesMobile from "./CategoriesMobile";
import { Category, IconName } from "./types";
import { CategoriesContainer } from "../styled/containers";

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

function Categories() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <CategoriesContainer id="categories-container">
      {isMobile ? (
        <CategoriesMobile categories={categories} />
      ) : (
        categories.map((category) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <CategoryCard key={category.title} {...category} />
        ))
      )}
    </CategoriesContainer>
  );
}

export default Categories;
