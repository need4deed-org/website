import { useTranslation } from "react-i18next";
import { Button } from "../core/button";
import { IconName } from "../core/button/Button/icon";
import useScreenType from "../../hooks/useScreenType";
import { ScreenTypes } from "../../config/types";

export default function FiltersButton() {
  const { t } = useTranslation();
  const screenSize = useScreenType();
  const isMobile = screenSize === ScreenTypes.MOBILE;

  return (
    <Button
      text={isMobile ? undefined : t("opportunityPage.filters")}
      backgroundcolor="var(--color-midnight)"
      height="var(--opportunities-filters-button-height)"
      width={isMobile ? "var(--opportunities-filters-button-width)" : undefined}
      /* Todo: onClick to be implemented later  */
      onClick={() => {}}
      iconName={IconName.FadersHorizontal}
      iconSize="var(--opportunities-filters-button-icon-size)"
    />
  );
}
