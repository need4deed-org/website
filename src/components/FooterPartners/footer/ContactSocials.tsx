import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { ATag } from "../../styled/tags";
import { Paragraph } from "../../styled/text";

const ContactSocialsContainer = styled.div`
  display: flex;
  flex-direction: var(
    --homepage-footer-partners-section-contact-socials-container-flex-direction
  );
  justify-content: var(
    --homepage-footer-partners-section-contact-socials-container-justify-content
  );
  gap: var(--homepage-footer-partners-section-contact-socials-container-gap);
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--homepage-footer-partners-section-contact-container-gap);
`;

const SocialsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--homepage-footer-partners-section-socials-container-gap);
`;

function Contact() {
  const { t } = useTranslation();

  return (
    <ContactContainer>
      <Paragraph
        key="Contact"
        color="var(--color-magnolia)"
        fontWeight="var(--homepage-footer-partners-section-p-fontWeight-large)"
        fontSize="var(--homepage-footer-partners-section-p-fontSize)"
        lineheight="var(--homepage-footer-partners-section-p-fontSize)"
      >
        {t("homepage.footer.contact")}:
      </Paragraph>

      <Paragraph
        key="email"
        color="var(--color-magnolia)"
        fontWeight="var(--homepage-footer-partners-section-p-fontWeight-small)"
        fontSize="var(--homepage-footer-partners-section-p-fontSize)"
        lineheight="var(--homepage-footer-partners-section-p-fontSize)"
      >
        info@need4deed.org
      </Paragraph>
    </ContactContainer>
  );
}

function Socials() {
  return (
    <SocialsContainer>
      <ATag href="https://www.linkedin.com/company/need4deed/">
        <LinkedinLogo
          size={40}
          weight="fill"
          color="var(--color-orchid-light)"
        />
      </ATag>
      <ATag href="https://www.facebook.com/need4deedberlin/">
        <FacebookLogo
          size={40}
          weight="fill"
          color="var(--color-orchid-light)"
        />
      </ATag>
      <ATag href="https://www.instagram.com/need4deed/">
        <InstagramLogo
          weight="bold"
          size={40}
          color="var(--color-orchid-light)"
        />
      </ATag>
    </SocialsContainer>
  );
}

export default function ContactSocials() {
  return (
    <ContactSocialsContainer>
      <Contact />
      <Socials />
    </ContactSocialsContainer>
  );
}
