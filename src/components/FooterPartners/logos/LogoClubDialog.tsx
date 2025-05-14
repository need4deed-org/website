import styled from "styled-components";
import { Paragraph } from "../../styled/text";
import FunderLogoClubDialog from "../../svg/FunderLogoClubDialog";

const ClubDialogDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--homepage-footer-partners-section-partners-club-dialog-div-gap);
`;

export function LogoClubDialog() {
  const logoHeight = getComputedStyle(
    document.documentElement,
  ).getPropertyValue(
    "--homepage-footer-partners-section-logo-club-dialog-height",
  );

  const logoWidth = getComputedStyle(document.documentElement).getPropertyValue(
    "--homepage-footer-partners-section-logo-club-dialog-width",
  );

  return (
    <ClubDialogDiv>
      <Paragraph color="var(--color-orchid-light)" fontWeight={500}>
        Träger:
      </Paragraph>
      <FunderLogoClubDialog width={logoWidth} height={logoHeight} />
    </ClubDialogDiv>
  );
}

export default LogoClubDialog;
