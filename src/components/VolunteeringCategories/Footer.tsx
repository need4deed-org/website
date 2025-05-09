import { useTranslation } from "react-i18next";
import { Button } from "../core/button";
import { BaseFooterContainer } from "../styled/containers";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <BaseFooterContainer id="footer-container">
      <Button
        onClick={() => {}} // TODO: click handler will be implemented later
        text={t("homepage.volunteeringCategories.footerButton")}
      />
    </BaseFooterContainer>
  );
}
