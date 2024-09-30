import { useTranslation } from "react-i18next";

interface Props {
  copies: string;
}

export default function Announcement({ copies }: Props) {
  const { t } = useTranslation();
  return (
    <div className="n4d-container">
      <h1>{t(`announcement.${copies}.header`)}</h1>
      <p>{t(`announcement.${copies}.para`)}</p>
    </div>
  );
}
