import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export const CodeSnippetContainer = styled.div`
	max-width: 100%;
	margin: 0 auto;
`;

export const CodeSnippet = styled(SyntaxHighlighter)`
	font-size: 14px !important;
	background-color: black !important;
	padding: 16px;
`;

export const codeStringFunction = `function handleCoffeeAvailability(coffeeAvailable) {
  let [bestColleague, helpsWithOthersProblems, getsInvolved, reactsSluggishly, delayedResponse] = coffeeAvailable 
    ? [true, true, true, false, false] 
    : [false, false, false, true, true];
}`;

export const codeSnippetLanguage = "javascript";

export const ContentWrapper = styled.div`
	--primary-color: whitesmoke;
	--secondary-color: #45a80e;

	height: 100vh;
	overflow: auto;

	h2 {
		color: var(--primary-color);
		font-size: 34px;
		margin-bottom: 8px;
		margin-left: 12px;
		margin-top: 5px;
	}

	h3 {
		color: var(--secondary-color);
	}

	p {
		color: var(--primary-color);
		font-size: 24px;
		line-height: 1.5;
		margin-left: 32px;
		margin-right: 15px;
	}
`;

export const GreetingText = styled.p`
	font-size: 26px;
	align-self: center;
`;

export const HighlightedText = styled.span`
	color: #45a80e;
`;

export const WhatIDoStyle = styled.h2``;

export const FadeScroll = styled.div`
	transition: all 400ms;
	opacity: 0;
`;

export const Fade = styled.div`
	opacity: 1;
	font-size: 300px;
`;

export const MoveLeft = styled.div`
	transition: all 400ms;
	opacity: 0;
`;

export const Left = styled.div`
	transform: translate(200px, 0);
	opacity: 1;
`;
