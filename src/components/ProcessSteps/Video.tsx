import styled from "styled-components";

const StyledDiv = styled.div`
  height: var(--homepage-process-section-video-height);
  width: var(--homepage-process-section-video-width);
  margin-left: var(--homepage-process-section-video-margin-left);

  iframe {
    width: 100%;
    height: 100%;
    border-radius: var(--homepage-process-section-video-border-radius);
  }
`;

export default function Video() {
  return (
    <StyledDiv>
      <iframe
        src="https://www.youtube.com/embed/tk5akHPd9oo?si=k01Klx7SxIWwKHO_&rel=0&autoplay=0"
        title="title"
        loading="lazy"
      />
    </StyledDiv>
  );
}
