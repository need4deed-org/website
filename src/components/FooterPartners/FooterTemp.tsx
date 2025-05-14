import styled from "styled-components";
import N4DLogoIcon from "../svg/N4DLogoIcon";

const FootersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 132px;
  width: 100%;
`;

export default function FootersTemporary() {
  return (
    <FootersContainer>
      <N4DLogoIcon width="100px" height="132px" />
    </FootersContainer>
  );
}
