import Layout from "../components/Layout";
import { Grid, Box } from "@mui/material";
import {
	ContentWrapper,
	HighlightedText,
	FadeScroll,
	Fade,
	MoveLeft,
	Left,
} from "@/components/styles/StyledAbout";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import WaterDropSharpIcon from "@mui/icons-material/WaterDropSharp";
import Diversity1SharpIcon from "@mui/icons-material/Diversity1Sharp";
import { createTheme, ThemeProvider } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

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
			title: <HighlightedText>Address</HighlightedText>,
			children: <p>88 Some Street, Some Town</p>,
		},
		{
			title: <HighlightedText>Email</HighlightedText>,
			children: <p>email@example.com</p>,
		},
		{
			title: <HighlightedText>Phone</HighlightedText>,
			children: <p>+0123 123 456 789</p>,
		},
		{
			children: (
				<>
					<h2>
						What <HighlightedText>I Do</HighlightedText>
					</h2>
				</>
			),
		},
		{
			title: "Self-Improvement",
			children: (
				<>
					<SelfImprovementIcon
						sx={{
							color: "#45a80e",
							fontSize: 55,
						}}
					/>
					<p>
						I enjoy life because it is full of unexpected possibilities that
						challenge me and help me grow. Each day brings new experiences,
						encounters, and lessons that inspire me to strive for my best. Life
						is a precious journey, and I cherish every moment by living
						consciously in the present and appreciating the beauty around me.
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
						I love web development because it empowers me to bring ideas to life
						and create meaningful digital experiences. It combines my passion
						for creativity, problem-solving, and constant learning, making every
						project a rewarding adventure.
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
						I stand for environmental conservation because our planet is a
						precious home we must protect. Through sustainable practices, we can
						preserve natural resources, mitigate climate change, and ensure a
						healthier future for generations to come. By advocating for
						eco-friendly solutions and raising awareness, we can inspire
						positive change and build a greener, more sustainable world
						together.
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
		return gridContainers.map((container, index) => {
			return (
				<Grid item key={index}>
					{container.title && <motion.h2>{container.title}</motion.h2>}
					{container.children}
				</Grid>
			);
		});
	};
	const paragraphTexts = [
		"Hello there!",
		"",
		"My name is Hossein Krouna.",
		"I have a passion for frontend development and strive for continuous growth in this field. When I'm not coding, I transform into a superhero dad, rescuing my two little ones from the daily adventures of life.",
		"Interestingly, my kids are also starting to show an interest in programming. Recognizing the importance of the IT industry for the future, I am excited to share my knowledge and inspire them on this journey.",
		"I believe in the power of learning and am committed to expanding my skills every day. With dedication and enthusiasm, I aim to make a positive impact through my contributions in the world of coding.",
	];

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
							<>
								<h2>
									About <HighlightedText>Me</HighlightedText>
								</h2>
							</>
							<motion.div>
								{paragraphTexts.map((text, index) => (
									<Grid container spacing={2} key={index}>
										<Grid item mb={20}>
											<Grid container>
												{/* {!IsVisible ? (
		 												<Fade>
		 													<motion.p>{text}</motion.p>
		 												</Fade>
		 											) : (
		 												<FadeScroll> */}
												<motion.p>{text}</motion.p>
												{/* </FadeScroll>
													)} */}
											</Grid>
										</Grid>
									</Grid>
								))}
							</motion.div>

							{renderGridContainers()}
						</ContentWrapper>
					</Box>
				</div>
			</Layout>
		</ThemeProvider>
	);
}

export default AboutPage;
