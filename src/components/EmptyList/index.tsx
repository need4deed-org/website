import { useTranslation } from "react-i18next";

interface Props {
  copies: string;
}

export default function EmptyList({ copies }: Props) {
  const { t } = useTranslation();
  return (
    <div className="n4d-container">
      <h1>{t(`${copies}.header`)}</h1>
      <p>{t(`${copies}.para`)}</p>
    </div>
  );
}
