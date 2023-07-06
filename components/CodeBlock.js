// import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/hljs";

SyntaxHighlighter.registerLanguage("javascript", js);

export const CodeBlock = () => {
	const codesnipet = `function handleCoffeeAvailability(coffeeAvailable) {
	   
    let [bestColleague, helpsWithOthersProblems, getsInvolved, reactsSluggishly, delayedResponse] = coffeeAvailable
	     ? [true, true, true, false, false]
	     : [false, false, false, true, true];
	 }`;

	return (
		<SyntaxHighlighter
			language="javascript"
			style={{ ...docco, 'code[class*="language-"]': { color: "white" } }}
			customStyle={{
				fontSize: "13px",
				borderRadius: "5px",
				backgroundColor: "#000000",
			}}
		>
			{codesnipet}
		</SyntaxHighlighter>
	);
};
