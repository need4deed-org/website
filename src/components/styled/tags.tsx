import styled from "styled-components";

interface ActivityTagProps {
  "background-color": string;
}

export const ActivityTag = styled.div<ActivityTagProps>`
  border-radius: var(--activity-tag-border-radius);
  padding: var(--activity-tag-padding);
  background-color: ${(props) => props["background-color"]};
`;

export default {};
