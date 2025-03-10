import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CategoryCard from "./CategoryCard";
import CategoriesMobile from "./CategoriesMobile";
import { Category, IconName } from "./types";
import { CategoriesContainer } from "../styled/containers";

function Categories() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { t } = useTranslation();

  const categories: Category[] = [
    {
      iconName: IconName.ChatsTeardrop,
      title: t("homepage.volunteeringCategoires.card.germanLanguageSupport"),
      description: t(
        "homepage.volunteeringCategoires.card.germanLanguageSupportInfo",
      ),
    },
    {
      iconName: IconName.Baby,
      title: t("homepage.volunteeringCategoires.card.childcare"),
      description: t("homepage.volunteeringCategoires.card.childcareInfo"),
    },
    {
      iconName: IconName.Bicycle,
      title: t("homepage.volunteeringCategoires.card.skillsBasedVolunteering"),
      description: t(
        "homepage.volunteeringCategoires.card.skillsBasedVolunteeringInfo",
      ),
    },
    {
      iconName: IconName.CalendarStar,
      title: t("homepage.volunteeringCategoires.card.events"),
      description: t("homepage.volunteeringCategoires.card.eventsInfo"),
    },
    {
      iconName: IconName.PingPong,
      title: t("homepage.volunteeringCategoires.card.sportsActivities"),
      description: t(
        "homepage.volunteeringCategoires.card.sportsActivitiesInfo",
      ),
    },
    {
      iconName: IconName.Users,
      title: t("homepage.volunteeringCategoires.card.accompanyARefugee"),
      description: t(
        "homepage.volunteeringCategoires.card.accompanyARefugeeInfo",
      ),
    },
  ];

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
