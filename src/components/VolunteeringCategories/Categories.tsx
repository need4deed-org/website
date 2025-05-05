import { useTranslation } from "react-i18next";
import CategoryCard from "./CategoryCard";
import { Category, IconName } from "./types";
import { CategoriesContainer } from "../styled/containers";
import { PaginatedCards } from "../core/paginatedCards";
import { ScreenTypes } from "../../config/types";
import useScreenType from "../../hooks/useScreenType";

function Categories() {
  const screenType = useScreenType();

  const { t } = useTranslation();

  const categories: Category[] = [
    {
      iconName: IconName.ChatsTeardrop,
      title: t("homepage.volunteeringCategories.card.germanLanguageSupport"),
      description: t(
        "homepage.volunteeringCategories.card.germanLanguageSupportInfo",
      ),
    },
    {
      iconName: IconName.Baby,
      title: t("homepage.volunteeringCategories.card.childcare"),
      description: t("homepage.volunteeringCategories.card.childcareInfo"),
    },
    {
      iconName: IconName.Bicycle,
      title: t("homepage.volunteeringCategories.card.skillsBasedVolunteering"),
      description: t(
        "homepage.volunteeringCategories.card.skillsBasedVolunteeringInfo",
      ),
    },
    {
      iconName: IconName.CalendarStar,
      title: t("homepage.volunteeringCategories.card.events"),
      description: t("homepage.volunteeringCategories.card.eventsInfo"),
    },
    {
      iconName: IconName.PingPong,
      title: t("homepage.volunteeringCategories.card.sportsActivities"),
      description: t(
        "homepage.volunteeringCategories.card.sportsActivitiesInfo",
      ),
    },
    {
      iconName: IconName.Users,
      title: t("homepage.volunteeringCategories.card.accompanyARefugee"),
      description: t(
        "homepage.volunteeringCategories.card.accompanyARefugeeInfo",
      ),
    },
  ];

  const cards = categories.map((category) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <CategoryCard key={category.title} {...category} />
  ));

  return (
    <CategoriesContainer id="categories-container">
      {screenType === ScreenTypes.MOBILE ? (
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
