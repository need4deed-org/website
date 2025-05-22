import styled from "styled-components";
import { videoGuideURL } from "../../config/constants";

const StyledDiv = styled.div`
  height: var(--homepage-process-section-video-height);
  width: var(--homepage-process-section-video-width);
  margin-left: var(--homepage-process-section-video-margin-left);

  iframe {
    width: 100%;
    height: 100%;
    border-radius: var(--homepage-process-section-video-border-radius);
    border: none;
  }
`;

export default function Video() {
  return (
    <StyledDiv>
      <iframe src={videoGuideURL} title="title" loading="lazy" />
    </StyledDiv>
  );
}
