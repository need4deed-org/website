import { useTranslation } from "react-i18next";
import { ScreenTypes } from "../../config/types";
import useScreenType from "../../hooks/useScreenType";
import { Button } from "../core/button";
import { IconName } from "../core/button/Button/icon";

interface Props {
  setIsFiltersOpen: (isOpen: boolean) => void;
}

export default function FiltersButton({ setIsFiltersOpen }: Props) {
  const { t } = useTranslation();
  const screenSize = useScreenType();
  const isMobile = screenSize === ScreenTypes.MOBILE;

  return (
    <Button
      text={isMobile ? undefined : t("opportunityPage.filters")}
      backgroundcolor="var(--color-midnight)"
      height="var(--opportunities-filters-button-height)"
      width={isMobile ? "var(--opportunities-filters-button-width)" : undefined}
      onClick={() => setIsFiltersOpen(true)}
      iconName={IconName.FadersHorizontal}
      iconSize="var(--opportunities-filters-button-icon-size)"
    />
  );
}
