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

export default {};
