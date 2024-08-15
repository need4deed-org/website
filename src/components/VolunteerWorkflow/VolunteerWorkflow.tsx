import { useTranslation } from "react-i18next";
import "./VolunteerWorkflow.css";

const hrefHandreichung =
  "https://drive.google.com/file/d/1q1SYX6-bB6kw2j5kroGYtChsb_0J9Ptj/view?usp=sharing";
interface Props {
  wrappingClassName: string;
}

export default function VolunteerWorkflow({ wrappingClassName }: Props) {
  const { t } = useTranslation();

  return (
    <div className={wrappingClassName}>
      <div className="volunteer-workflow-img-container">
        <div className="volunteer-workflow-img-wrapper">
          <img src="/images/volunteer-workflow.jpg" alt="volunteer-workflow" />
        </div>
        <div className="volunteer-workflow-btn">
          <a target="_blank" href={hrefHandreichung}>
            {t("linkToPrevProj")}
          </a>
        </div>
      </div>
    </div>
  );
}
