import N4DLogo from "../../svg/N4DLogo";

export function N4DHeaderLogo() {
  const logoHeight = getComputedStyle(
    document.documentElement,
  ).getPropertyValue("--homepage-hero-section-logo-height");

  const logoWidth = getComputedStyle(document.documentElement).getPropertyValue(
    "--homepage-hero-section-logo-width",
  );

  return <N4DLogo height={logoHeight} width={logoWidth} />;
}

export default N4DHeaderLogo;
