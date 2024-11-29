import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

interface Props {
  copies?: string;
}

export default function Announcement({ copies }: Props) {
  const { t } = useTranslation();
  const [copiesAt] = useSearchParams();
  const pointer = copies || copiesAt.get("pointer") || "thankYou";
  return (
    <div className="n4d-container">
      <h1>{t(`${pointer}.header`)}</h1>
      <p>{t(`${pointer}.para`)}</p>
    </div>
  );
}
