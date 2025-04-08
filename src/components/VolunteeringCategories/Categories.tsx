import { useTranslation } from "react-i18next";
import CategoryCard from "./CategoryCard";
import { Category, IconName } from "./types";
import { CategoriesContainer } from "../styled/containers";
import useResponsive from "../../hooks/useResponsive";
import { screenSizeThresholds } from "../../config/constants";
import { PaginatedCards } from "../core/paginatedCards";

function Categories() {
  const isMobile = useResponsive(screenSizeThresholds.tablet);
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

  const cards = categories.map((category) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <CategoryCard key={category.title} {...category} />
  ));

  return (
    <CategoriesContainer id="categories-container">
      {isMobile ? (
        <PaginatedCards
          cards={cards}
          arrowButtonColor="orchid-dark"
          bottomIndicatorColor="orchid-dark"
          bottomCurrentIndicatorColor="papaya"
        />
      ) : (
        cards
      )}
    </CategoriesContainer>
  );
}

export default Categories;
