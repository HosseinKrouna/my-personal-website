import styled from "styled-components";

export const ContentWrapper = styled.div`
	--primary-color: whitesmoke;
	--secondary-color: #45a80e;
	height: 100vh;
	overflow: auto;
	h2 {
		color: var(--primary-color);
		font-size: 44px;
		margin-bottom: 10px;
		margin-left: 12px;
	}

	h3 {
		color: var(--secondary-color);
	}

	p {
		color: var(--primary-color);
		font-size: 16px;
		line-height: 1.5;
		margin-left: 32px;
		margin-right: 15px;
	}
`;

export const HighlightedText = styled.span`
	color: var(--secondary-color);
`;

export const FadeScroll = styled.div`
	transition: all 400ms;
	opacity: 0;
`;

export const Fade = styled.div`
	opacity: 1;
`;

export const MoveLeft = styled.div`
	transition: all 400ms;
	opacity: 0;
`;

export const Left = styled.div`
	transform: translate(200px, 0);
	opacity: 1;
`;
