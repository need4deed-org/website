import styled from "styled-components";
import useScreenType from "../../hooks/useScreenType";
import { ScreenTypes } from "../../config/types";
import { LogoBerlin, LogoClubDialog, LogoEU, LogoSchönebergHilft } from "./logos";

const PartnersContainer = styled.div`
  display: flex;
  flex-direction: var(
    --homepage-footer-partners-section-partners-container-flex-direction
  );
  justify-content: var(
    --homepage-footer-partners-section-partners-container-justify-content
  );
  height: var(--homepage-footer-partners-section-partners-container-height);
  width: 100%;
  gap: var(--homepage-footer-partners-section-partners-container-gap);
`;

interface FrameProps {
  height?: string;
  gap?: string;
}

const FrameContainer = styled.div<FrameProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: ${(props) => props.height};
  gap: ${(props) => props.gap};
`;

const DesktopGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: var(--homepage-footer-partners-section-partners-grid-column-gap, 40px);
  row-gap: var(--homepage-footer-partners-section-partners-grid-row-gap, 24px);
  align-items: center;
  justify-items: center;
  width: 100%;
`;

const partnerLogos = {
  [ScreenTypes.DESKTOP]: (
    <DesktopGrid>
      <LogoClubDialog />
      <LogoEU />
      <LogoBerlin />
      <LogoSchönebergHilft />
    </DesktopGrid>
  ),
  [ScreenTypes.TABLET]: [
    <FrameContainer
      key="frame1"
      height="var(--homepage-footer-partners-section-partners-frame-container-height)"
      gap="var(--homepage-footer-partners-section-partners-frame-container-gap-1)"
    >
      <LogoClubDialog />
      <LogoEU />
    </FrameContainer>,
    <FrameContainer
      key="frame2"
      height="var(--homepage-footer-partners-section-partners-frame-container-height)"
      gap="var(--homepage-footer-partners-section-partners-frame-container-gap-2)"
    >
      <LogoBerlin />
      <LogoSchönebergHilft />
    </FrameContainer>,
  ],
  [ScreenTypes.MOBILE]: [
    <FrameContainer key="club">
      <LogoClubDialog />
    </FrameContainer>,
    <FrameContainer
      key="eu-berlin"
      gap="var(--homepage-footer-partners-section-partners-frame-container-gap)"
    >
      <LogoEU />
      <LogoBerlin />
    </FrameContainer>,
    <FrameContainer key="schoneberg">
      <LogoSchönebergHilft />
    </FrameContainer>,
  ],
};

export function Partners() {
  const screenType = useScreenType();

  return <PartnersContainer>{partnerLogos[screenType]}</PartnersContainer>;
}

export default Partners;
