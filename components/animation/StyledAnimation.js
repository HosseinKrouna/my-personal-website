import { keyframes, css } from "styled-components";

export const fadeIn = css`
	animation: ${keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `} 1s forwards;
`;

export const slideLeft = css`
	animation: ${keyframes`
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  `} 1s forwards;
`;

export const slideUp = css`
	animation: ${keyframes`
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  `} 1s forwards;
`;
