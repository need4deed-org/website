import { useTranslation } from "react-i18next";
import "./VolunteerWorkflow.css";
import { getImageUrl } from "../../utils/index";

const hrefHandreichung =
  "https://drive.google.com/file/d/1q1SYX6-bB6kw2j5kroGYtChsb_0J9Ptj/view?usp=sharing";
interface Props {
  wrappingClassName: string;
}

export default function VolunteerWorkflow({ wrappingClassName }: Props) {
  const { t } = useTranslation();

  return (
    <div className={wrappingClassName}>
      <div className="n4d-container volunteer-workflow-img-container">
        <div className="volunteer-workflow-img-wrapper">
          <img
            src={getImageUrl("volunteer-workflow.webp")}
            alt="Volunteer workflow"
            loading="lazy"
          />
        </div>
        <div className="volunteer-workflow-btn">
          <a target="_blank" href={hrefHandreichung} rel="noreferrer">
            {t("linkToPrevProj")}
          </a>
        </div>
      </div>
    </div>
  );
}
