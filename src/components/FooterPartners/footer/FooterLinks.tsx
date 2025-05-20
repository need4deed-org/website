import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Paragraph } from "../../styled/text";

interface FooterLinkProps {
  links: string[];
}
const FrameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--homepage-footer-partners-section-footer-frame-container-gap);
`;

export default function FooterLinks({ links }: FooterLinkProps) {
  const { t } = useTranslation();

  return (
    <FrameContainer>
      {links.map((link) => (
        <Paragraph
          key={link}
          color="var(--color-magnolia)"
          fontWeight="var(--homepage-footer-partners-section-p-fontWeight-large)"
          fontSize="var(--homepage-footer-partners-section-p-fontSize)"
          lineheight="var(--homepage-footer-partners-section-p-fontSize)"
        >
          {t(link)}
        </Paragraph>
      ))}
    </FrameContainer>
  );
}
