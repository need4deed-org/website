import N4DLogoFlat from "../../../svg/N4DLogoFlat";

export function N4DLogo() {
  const logoWidth = getComputedStyle(document.documentElement).getPropertyValue(
    "--layout-static-page-n4d-logo-width",
  );

  const logoHeight = getComputedStyle(
    document.documentElement,
  ).getPropertyValue("--layout-static-page-n4d-logo-height");

  return (
    <N4DLogoFlat
      color="var(--color-orchid-dark)"
      width={logoWidth}
      height={logoHeight}
      onClick={() => {
        window.location.href = "/";
      }}
    />
  );
}

export default N4DLogo;
