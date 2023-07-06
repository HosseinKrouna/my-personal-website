import Layout from "../components/Layout";
import { Grid, Box, Paper } from "@mui/material";
import {
	ContentWrapper,
	HighlightedText,
	WhatIDoStyle,
	Fade,
} from "@/components/styles/StyledAbout";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import WaterDropSharpIcon from "@mui/icons-material/WaterDropSharp";
import Diversity1SharpIcon from "@mui/icons-material/Diversity1Sharp";
import { createTheme, ThemeProvider } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { CodeBlock } from "@/components/CodeBlock";

const theme = createTheme();

function AboutPage() {
	const [scrollTop, setScrollTop] = useState(0);

	const handleScroll = (event) => {
		setScrollTop(event.currentTarget.scrollTop);
	};

	console.log("scrollTop:", scrollTop);

	const gridContainers = [
		{
			title: <HighlightedText>Age</HighlightedText>,
			children: <p>40</p>,
		},
		{
			title: <HighlightedText>Residence</HighlightedText>,
			children: <p>Germany</p>,
		},
		{
			title: <HighlightedText>City</HighlightedText>,
			children: <p>Frankfurt am Main</p>,
		},
		{
			title: <HighlightedText>Childrens</HighlightedText>,
			children: <p>2</p>,
		},
		{
			title: <HighlightedText>... good to know</HighlightedText>,
			children: (
				<Grid container>
					<CodeBlock />
				</Grid>
			),
		},
		{
			children: (
				<WhatIDoStyle>
					What <HighlightedText>I Do</HighlightedText>
				</WhatIDoStyle>
			),
		},
		{
			title: "The art of life",
			children: (
				<>
					<SelfImprovementIcon
						sx={{
							color: "#45a80e",
							fontSize: 55,
						}}
					/>
					<p>
						I enjoy life because it is full of unexpected opportunities that
						challenge me and help me grow. Every day brings new experiences,
						encounters and lessons that inspire me to do my best. Life is a
						precious journey and I cherish every moment by consciously living in
						the present and appreciating the beauty around me.
					</p>
				</>
			),
		},
		{
			title: "Web Development",
			children: (
				<>
					<DeveloperModeIcon
						sx={{
							color: "#45a80e",
							fontSize: 55,
						}}
					/>
					<p>
						I am passionate about web development because it allows me to turn
						ideas into reality and create impactful online experiences. It
						brings together my love of creativity, problem solving and
						continuous learning, making each project an exciting journey of
						growth.
					</p>
				</>
			),
		},
		{
			title: "Environmental Conservation",
			children: (
				<>
					<WaterDropSharpIcon
						sx={{
							color: "#45a80e",
							fontSize: 55,
						}}
					/>
					<p>
						I stand for environmental protection, because our planet is one
						precious home that we must protect. Through sustainable practices,
						we can Conserve natural resources, counteract climate change and
						ensure a a healthier future for generations to come. By working
						towards it With green solutions and awareness, we can create
						inspiring and positive change to build a greener and more
						sustainable world together.
					</p>
				</>
			),
		},
		{
			title: "Diversity",
			children: (
				<>
					<Diversity1SharpIcon
						sx={{
							color: "#45a80e",
							fontSize: 55,
						}}
					/>
					<p>
						I believe in diversity because it enriches our perspectives and
						fosters inclusive communities. Embracing diverse backgrounds,
						cultures, and ideas promotes understanding, empathy, and equal
						opportunities for all. By celebrating differences and creating
						inclusive spaces, we can build a more harmonious and equitable
						society.
					</p>
				</>
			),
		},
	];

	const renderGridContainers = () => {
		return (
			<Grid container spacing={2}>
				{gridContainers.map((container, index) => (
					<Grid item key={index} xs={12}>
						<Grid container justifyContent="center" alignItems="center">
							<Paper
								elevation={3}
								sx={{
									borderRadius: "12px",
									padding: "16px",
									backgroundColor:
										index === 5 ? "transparent" : "rgba(0, 0, 0, 0.1)",
									boxShadow:
										index === 5 ? "none" : "0px 2px 4px rgba(0, 0, 0, 0.2)",
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									width: "350px",
								}}
							>
								<h2>{container.title}</h2>
								{container.children}
							</Paper>
						</Grid>
					</Grid>
				))}
			</Grid>
		);
	};

	const paragraphTexts = [
		"",
		"",
		"My name is Hossein Krouna.",
		"I have a passion for frontend development and strive for continuous growth in this field. When I'm not coding, I transform into a superhero dad, rescuing my two little ones from the daily adventures of life.",
		"Interestingly, my kids are also starting to show an interest in programming. Recognizing the importance of the IT industry for the future, I am excited to share my knowledge and inspire them on this journey.",
		"I believe in the power of learning and am committed to expanding my skills every day. With dedication and enthusiasm, I aim to make a positive impact through my contributions in the world of coding.",
	];

	const headerFontSize = scrollTop >= 196 ? 49 : 58;
	const headerOpacity = Math.max(1 - scrollTop / 250, 0);
	const greetingTextFontSize = scrollTop >= 596 ? 28 : 41;
	const greetingTextOpacity = Math.max(1 - scrollTop / 553, 0);

	//NOTE - add Fun Fact section

	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<div>
					<Box
						display="flex"
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
						minHeight="100vh"
						padding={2}
					>
						<ContentWrapper onScroll={handleScroll}>
							<motion.div style={{ textAlign: "center" }}>
								<motion.h2
									style={{
										fontSize: headerFontSize,
										opacity: headerOpacity,
										marginTop: 253,
									}}
								>
									About<HighlightedText>Me</HighlightedText>
								</motion.h2>
							</motion.div>
							<motion.div style={{ textAlign: "center" }}>
								<motion.h3
									style={{
										fontSize: greetingTextFontSize,
										opacity: greetingTextOpacity,
										marginBottom: 0,
										color: "whitesmoke",
										marginTop: 183,
									}}
								>
									Hello there!
								</motion.h3>
							</motion.div>
							<motion.div>
								{paragraphTexts.map((text, index) => (
									<Grid container spacing={2} key={index}>
										<Grid item mb={2}>
											<Grid container>
												<Fade>
													<motion.p>{text}</motion.p>
												</Fade>
											</Grid>
										</Grid>
									</Grid>
								))}
							</motion.div>
							<Grid container>{renderGridContainers()}</Grid>
						</ContentWrapper>
					</Box>
				</div>
			</Layout>
		</ThemeProvider>
	);
}

export default AboutPage;
