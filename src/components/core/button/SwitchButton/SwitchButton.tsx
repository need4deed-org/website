import "./SwitchButton.css";

interface SwitchButtonProps {
  isChecked: boolean;
  onToggle: () => void;
  scale?: number; // Scale number from 1 to 10
}

function SwitchButton({ isChecked, onToggle, scale = 5 }: SwitchButtonProps) {
  // Clamp the scale between 1 and 10 to avoid unintended sizes
  const clampedScale = Math.min(Math.max(scale, 1), 10);

  // Base dimensions for the switch
  const baseWidth = 50;
  const baseHeight = 24;
  const baseCircle = 20;

  // Calculate sizes based on scale
  const width = (baseWidth / 5) * clampedScale;
  const height = (baseHeight / 5) * clampedScale;
  const circleSize = (baseCircle / 5) * clampedScale;

  return (
    <div className="switch-container">
      <button
        onClick={onToggle}
        role="switch"
        type="button"
        aria-checked={isChecked}
        aria-label={`Toggle ${isChecked ? "on" : "off"}`}
        className={`switch-button ${isChecked ? "switch-checked" : ""}`}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          borderRadius: `${height / 2}px`,
        }}
      >
        <div
          className="switch-circle"
          style={{
            width: `${circleSize}px`,
            height: `${circleSize}px`,
            top: `${(height - circleSize) / 2}px`,
            left: isChecked ? `${width - circleSize - 2}px` : "2px",
          }}
        />
      </button>
    </div>
  );
}

export default SwitchButton;
