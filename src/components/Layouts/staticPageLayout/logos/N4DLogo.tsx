import N4DLogoFlat from "../../../svg/N4DLogoFlat";

export function N4DLogo() {
  const logoWidth = getComputedStyle(document.documentElement).getPropertyValue(
    "--layout-static-page-n4d-logo-width",
  );

  const logoHeight = getComputedStyle(
    document.documentElement,
  ).getPropertyValue("--layout-static-page-n4d-logo-height");

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <span
      onClick={() => {
        window.location.href = "/";
      }}
    >
      <N4DLogoFlat
        color="var(--color-orchid-dark)"
        width={logoWidth}
        height={logoHeight}
      />
    </span>
  );
}

export default N4DLogo;
