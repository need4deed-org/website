import styled from "styled-components";
import useScreenType from "../../hooks/useScreenType";
import { ScreenTypes } from "../../config/types";
import {
  LogoBerlin,
  LogoClubDialog,
  LogoEU,
  LogoSchönebergHilft,
} from "./logos";

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

const partnerLogos = {
  [ScreenTypes.DESKTOP]: [
    <LogoClubDialog key="club" />,
    <LogoBerlin key="berlin" />,
    <LogoEU key="eu" />,
    <LogoSchönebergHilft key="schoneberg" />,
  ],
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
