import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

interface Props {
  copies?: string;
  render?: () => ReactNode;
}

export default function Announcement({ copies, render }: Props) {
  const { t } = useTranslation();
  const [copiesAt] = useSearchParams();
  const pointer = copies || copiesAt.get("pointer") || "thankYou";
  return (
    <div className="n4d-container">
      <h1>{t(`${pointer}.header`)}</h1>
      <p>{t(`${pointer}.para`)}</p>
      {render && render()}
    </div>
  );
}
