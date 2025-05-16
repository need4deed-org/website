import FunderLogoSchönebergHilft from "../../svg/FunderLogoSchönebergHilft";

export function LogoSchönebergHilft() {
  const logoHeight = getComputedStyle(
    document.documentElement,
  ).getPropertyValue(
    "--homepage-footer-partners-section-logo-SchönebergHilft-height",
  );

  const logoWidth = getComputedStyle(document.documentElement).getPropertyValue(
    "--homepage-footer-partners-section-logo-SchönebergHilft-width",
  );

  return <FunderLogoSchönebergHilft width={logoWidth} height={logoHeight} />;
}

export default LogoSchönebergHilft;
