import FunderLogoBerlin from "../../svg/FunderLogoBerlin";

export function LogoBerlin() {
  const logoHeight = getComputedStyle(
    document.documentElement,
  ).getPropertyValue("--homepage-footer-partners-section-logo-berlin-height");

  const logoWidth = getComputedStyle(document.documentElement).getPropertyValue(
    "--homepage-footer-partners-section-logo-berlin-width",
  );

  return <FunderLogoBerlin width={logoWidth} height={logoHeight} />;
}

export default LogoBerlin;
