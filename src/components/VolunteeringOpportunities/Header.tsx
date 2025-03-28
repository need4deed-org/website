import { useTranslation } from "react-i18next";
import { Heading2 } from "../styled/text";

function Header() {
  const { t } = useTranslation();

  return <Heading2>{t(`homepage.volunteeringOpportunities.header`)}</Heading2>;
}

export default Header;
