import SwitchButton from "../core/button/SwitchButton/SwitchButton";
import "../forms/index.css";

interface CookieItemProps {
  label: string;
  isChecked: boolean;
  onToggle: () => void;
}

export default function CookieItem({
  label,
  isChecked,
  onToggle,
}: CookieItemProps) {
  return (
    <div className="cookie-item ">
      <p>{label}</p>
      <SwitchButton isChecked={isChecked} onToggle={onToggle} scale={4} />
    </div>
  );
}
