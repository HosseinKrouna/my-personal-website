import Layout from "../components/Layout";
import { Grid, Box } from "@mui/material";
import {
	ContentWrapper,
	HighlightedText,
} from "@/components/styles/StyledAbout";
import { motion, useScroll, useTransform } from "framer-motion";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import WaterDropSharpIcon from "@mui/icons-material/WaterDropSharp";
import Diversity1SharpIcon from "@mui/icons-material/Diversity1Sharp";

const cardVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function AboutPage() {
	const { scrollYProgress } = useScroll();
	const opacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
	const translateY = useTransform(scrollYProgress, [0.5, 0.7], [50, 0]);

	//NOTE - add Fun Fact section

	return (
		<Layout>
			<ContentWrapper>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<motion.div
							variants={cardVariants}
							initial="hidden"
							animate="visible"
							style={{ opacity, y: translateY }}
						>
							<h2>
								About <HighlightedText>Me</HighlightedText>
							</h2>

							<p>Hello there!</p>
							<p>
								My name is Hossein Krouna.
								<br />I have a passion for frontend development and strive for
								continuous growth in this field. When
								{` I'm`} not coding, I transform into a superhero dad, rescuing
								my two little ones from the daily adventures of life.
							</p>
							<p>
								Interestingly, my kids are also starting to show an interest in
								programming. Recognizing the importance of the IT industry for
								the future, I am excited to share my knowledge and inspire them
								on this journey.
							</p>
							<p>
								I believe in the power of learning and am committed to expanding
								my skills every day. With dedication and enthusiasm, I aim to
								make a positive impact through my contributions in the world of
								coding.
							</p>
						</motion.div>
					</Grid>
					<Box sx={{ flexGrow: 1 }}>
						<Grid container mt={8} ml={8}>
							<motion.div
								variants={cardVariants}
								initial="hidden"
								animate="visible"
								style={{ opacity, y: translateY }}
							>
								<Grid item container xs={12}>
									<Grid item xs={3}>
										<h3>Age</h3>
									</Grid>
									<Grid item xs={9}>
										<p>40</p>
									</Grid>
								</Grid>

								<Grid item container xs={12} sx={{ my: -4 }}>
									<Grid item xs={3}>
										<h3>Residence</h3>
									</Grid>
									<Grid item xs={9}>
										<p>Germany</p>
									</Grid>
								</Grid>

								<Grid item container xs={12} sx={{ my: -4 }}>
									<Grid item xs={3}>
										<h3>Address</h3>
									</Grid>
									<Grid item xs={9}>
										<p>88 Some Street, Some Town</p>
									</Grid>
								</Grid>

								<Grid item container xs={12} sx={{ my: -4 }}>
									<Grid item xs={3}>
										<h3>Email</h3>
									</Grid>
									<Grid item xs={9}>
										<p>email@example.com</p>
									</Grid>
								</Grid>

								<Grid item container xs={12} sx={{ my: -4 }}>
									<Grid item xs={3}>
										<h3>Phone</h3>
									</Grid>
									<Grid item xs={9}>
										<p>+0123 123 456 789</p>
									</Grid>
								</Grid>
							</motion.div>
						</Grid>
					</Box>

					<Box sx={{ flexGrow: 1 }}>
						<Grid container mt={8} ml={8}>
							<motion.div
								variants={cardVariants}
								initial="hidden"
								animate="visible"
								style={{ opacity, y: translateY }}
							>
								<Grid item xs={12}>
									<h2>
										What <HighlightedText>I Do</HighlightedText>
									</h2>
								</Grid>
								<Grid
									item
									xs={12}
									sm={6}
									sx={{ display: "flex", alignItems: "center" }}
								>
									<SelfImprovementIcon
										sx={{
											color: "#45a80e",
											fontSize: 55,
										}}
									/>
									<p>
										Pellentesque pellentesque, ipsum sit amet auctor accumsan,
										odio tortor bibendum massa, sit amet ultricies ex lectus
										scelerisque nibh. Ut non sodales.
									</p>
								</Grid>
								<Grid item xs={12} mt={8} sm={6}>
									<DeveloperModeIcon
										sx={{
											color: "#45a80e",
											fontSize: 55,
										}}
									/>
									<p>
										Pellentesque pellentesque, ipsum sit amet auctor accumsan,
										odio tortor bibendum massa, sit amet ultricies ex lectus
										scelerisque nibh. Ut non sodales.
									</p>
								</Grid>
								<Grid
									item
									xs={6}
									sm={3}
									sx={{ display: "flex", alignItems: "center" }}
								>
									<WaterDropSharpIcon
										sx={{
											color: "#45a80e",
											fontSize: 55,
										}}
									/>
									<p>
										Pellentesque pellentesque, ipsum sit amet auctor accumsan,
										odio tortor bibendum massa, sit amet ultricies ex lectus
										scelerisque nibh. Ut non sodales.
									</p>
								</Grid>
								<Grid item xs={6} sm={3}>
									<Diversity1SharpIcon
										sx={{
											color: "#45a80e",
											fontSize: 55,
										}}
									/>
									<p>
										Pellentesque pellentesque, ipsum sit amet auctor accumsan,
										odio tortor bibendum massa, sit amet ultricies ex lectus
										scelerisque nibh. Ut non sodales.
									</p>
								</Grid>
							</motion.div>
						</Grid>
					</Box>
				</Grid>
			</ContentWrapper>
		</Layout>
	);
}

export default AboutPage;
