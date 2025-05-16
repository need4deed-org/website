import FunderLogoEU from "../../svg/FunderLogoEU";

export function LogoEU() {
  const logoHeight = getComputedStyle(
    document.documentElement,
  ).getPropertyValue("--homepage-footer-partners-section-logo-eu-height");

  const logoWidth = getComputedStyle(document.documentElement).getPropertyValue(
    "--homepage-footer-partners-section-logo-eu-width",
  );

  return <FunderLogoEU width={logoWidth} height={logoHeight} />;
}

export default LogoEU;
