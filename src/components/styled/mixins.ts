/* eslint-disable import/prefer-default-export */
import { css } from "styled-components";

export const hyphenationStyles = css`
  white-space: normal; /* Allows text to wrap */
  overflow-wrap: break-word; /* Ensures long words break to fit */
  word-break: break-word; /* Fallback for older browsers for word breaking */

  /* Enable automatic hyphenation */
  hyphens: auto;
  -webkit-hyphens: auto; /* For WebKit browsers (Safari, Chrome) */
  -ms-hyphens: auto; /* For Internet Explorer/Edge */
`;
