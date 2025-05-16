import N4DLogoIcon from "../../svg/N4DLogoIcon";

export function LogoN4D() {
  const logoHeight = getComputedStyle(
    document.documentElement,
  ).getPropertyValue("--homepage-footer-partners-section-logo-n4d-height");

  const logoWidth = getComputedStyle(document.documentElement).getPropertyValue(
    "--homepage-footer-partners-section-logo-n4d-width",
  );

  return <N4DLogoIcon width={logoWidth} height={logoHeight} />;
}

export default LogoN4D;
