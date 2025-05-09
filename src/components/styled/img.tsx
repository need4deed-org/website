import styled from "styled-components";

interface CircleImageProps {
  src: string;
}

export const CirclePic = styled.img<CircleImageProps>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  src: ${(props) => props.src};
`;

interface BackgroundImgProps {
  src: string;
  height?: string;
}

export const BackgroundImg = styled.div<BackgroundImgProps>`
  width: 100%;
  height: ${(props) => props.height || "100%"};
  background: ${(props) => `url(${props.src}) no-repeat center center`};
  background-size: cover;
`;
