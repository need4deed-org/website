import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Subpages } from "../../config/types";
import { Button } from "../core/button";
import { BaseFooterContainer } from "../styled/containers";

export default function Footer() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <BaseFooterContainer id="footer-container">
      <Button
        onClick={() => {
          navigate(`/${Subpages.OPPORTUNITY_CARDS}`);
        }}
        text={t(`homepage.volunteeringOpportunities.footerButton`)}
      />
    </BaseFooterContainer>
  );
}
