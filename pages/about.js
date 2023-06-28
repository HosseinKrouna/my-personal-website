import Layout from "../components/Layout";
import { Grid, Box } from "@mui/material";
import {
	ContentWrapper,
	HighlightedText,
} from "@/components/styles/StyledAbout";
import { motion } from "framer-motion";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import WaterDropSharpIcon from "@mui/icons-material/WaterDropSharp";
import Diversity1SharpIcon from "@mui/icons-material/Diversity1Sharp";
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme();

function AboutPage() {
	const [scrollY, setScrollY] = useState(0);
	console.log("scrollY", scrollY);
	//FIXME - scrollY always 0
	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition =
				window.pageYOffset || document.documentElement.scrollTop;
			setScrollY(scrollPosition);
		};

		console.log("scrollY hat sich geändert:", scrollY);
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [scrollY]);

	const paragraphTexts = [
		"Hello there!",
		"",
		"My name is Hossein Krouna.",
		"I have a passion for frontend development and strive for continuous growth in this field. When I'm not coding, I transform into a superhero dad, rescuing my two little ones from the daily adventures of life.",
		"Interestingly, my kids are also starting to show an interest in programming. Recognizing the importance of the IT industry for the future, I am excited to share my knowledge and inspire them on this journey.",
		"I believe in the power of learning and am committed to expanding my skills every day. With dedication and enthusiasm, I aim to make a positive impact through my contributions in the world of coding.",
	];

	const renderParagraphsWithMotionDiv = () => {
		return paragraphTexts.map((text, index) => (
			<Grid item key={index}>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: index * 0.2 }}
					style={{
						opacity: scrollY > 0 ? 0 : 1,
						transform: `translateX(${scrollY > 0 ? -500 : 0}px)`,
					}}
				>
					<p>{text}</p>
				</motion.div>
			</Grid>
		));
	};

	const handleMotionDiv = (children) => {
		return (
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				style={{
					opacity: scrollY > 0 ? 0 : 1,
					transform: `translateX(${scrollY > 0 ? -500 : 0}px)`,
				}}
			>
				{children}
			</motion.div>
		);
	};

	//NOTE - add Fun Fact section

	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<Box
					display="flex"
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
					minHeight="100vh"
					padding={2}
				>
					<ContentWrapper>
						<Box mb={2}>
							<Grid container spacing={2}>
								{handleMotionDiv(
									<>
										<h2>
											About <HighlightedText>Me</HighlightedText>
										</h2>
									</>
								)}
							</Grid>
						</Box>

						<Box mb={2}>
							<Grid container spacing={2}>
								{renderParagraphsWithMotionDiv()}
							</Grid>
						</Box>
						<Grid container spacing={2}>
							<h3>Age</h3>
							{handleMotionDiv(<p>40</p>)}
						</Grid>

						<Grid container spacing={2}>
							<h3>Residence</h3>
							{handleMotionDiv(<p>Germany</p>)}
						</Grid>

						<Grid container spacing={2}>
							<h3>Address</h3>
							{handleMotionDiv(<p>88 Some Street, Some Town</p>)}
						</Grid>

						<Grid container spacing={2}>
							<h3>Email</h3>
							{handleMotionDiv(<p>email@example.com</p>)}
						</Grid>

						<Grid container spacing={2}>
							<h3>Phone</h3>
							{handleMotionDiv(<p>+0123 123 456 789</p>)}
						</Grid>

						<Grid container spacing={2}>
							{handleMotionDiv(
								<h2>
									What <HighlightedText>I Do</HighlightedText>
								</h2>
							)}
						</Grid>

						<Grid container spacing={2}>
							{handleMotionDiv(
								<SelfImprovementIcon
									sx={{
										color: "#45a80e",
										fontSize: 55,
									}}
								/>
							)}
							{handleMotionDiv(
								<p>
									I enjoy life because it is full of unexpected possibilities
									that challenge me and help me grow. Each day brings new
									experiences, encounters, and lessons that inspire me to strive
									for my best. Life is a precious journey, and I cherish every
									moment by living consciously in the present and appreciating
									the beauty around me.
								</p>
							)}
						</Grid>

						<Grid container spacing={2}>
							{handleMotionDiv(
								<DeveloperModeIcon
									sx={{
										color: "#45a80e",
										fontSize: 55,
									}}
								/>
							)}
							{handleMotionDiv(
								<p>
									I love web development because it empowers me to bring ideas
									to life and create meaningful digital experiences. It combines
									my passion for creativity, problem-solving, and constant
									learning, making every project a rewarding adventure.
								</p>
							)}
						</Grid>

						<Grid container spacing={2}>
							{handleMotionDiv(
								<>
									<WaterDropSharpIcon
										sx={{
											color: "#45a80e",
											fontSize: 55,
										}}
									/>
									<p>
										I stand for environmental conservation because our planet is
										a precious home we must protect. Through sustainable
										practices, we can preserve natural resources, mitigate
										climate change, and ensure a healthier future for
										generations to come. By advocating for eco-friendly
										solutions and raising awareness, we can inspire positive
										change and build a greener, more sustainable world together.
									</p>
								</>
							)}
						</Grid>

						<Grid container spacing={2}>
							{handleMotionDiv(
								<Diversity1SharpIcon
									sx={{
										color: "#45a80e",
										fontSize: 55,
									}}
								/>
							)}
							{handleMotionDiv(
								<p>
									I believe in diversity because it enriches our perspectives
									and fosters inclusive communities. Embracing diverse
									backgrounds, cultures, and ideas promotes understanding,
									empathy, and equal opportunities for all. By celebrating
									differences and creating inclusive spaces, we can build a more
									harmonious and equitable society.
								</p>
							)}
						</Grid>
					</ContentWrapper>
				</Box>
			</Layout>
		</ThemeProvider>
	);
}

export default AboutPage;
