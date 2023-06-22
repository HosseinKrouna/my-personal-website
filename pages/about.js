import Layout from "../components/Layout";
import { Grid } from "@mui/material";
import { ContentWrapper } from "@/components/styles/StyledAbout";
import { motion, useScroll, useTransform } from "framer-motion";

const cardVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function AboutPage() {
	const { scrollY } = useScroll();
	const opacity = useTransform(scrollY, [100, 200], [0, 1]);

	return (
		<Layout>
			<ContentWrapper>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<motion.div
							variants={cardVariants}
							initial="hidden"
							animate="visible"
							style={{ opacity }}
						>
							<h2>About Me</h2>
							<p>
								{`Hello there! My name is Hossein Krouna. I have a passion for frontend
				development and strive for continuous growth in this field. When I'm not
				coding, I transform into a superhero dad, rescuing my two little ones
				from the daily adventures of life. Interestingly, my kids are also
				starting to show an interest in programming. Recognizing the importance
				of the IT industry for the future, I am excited to share my knowledge
				and inspire them on this journey. I believe in the power of learning and
				am committed to expanding my skills every day. With dedication and
				enthusiasm, I aim to make a positive impact through my contributions in
				the world of coding.`}
							</p>
						</motion.div>
					</Grid>
					<Grid item xs={6} sm={3}>
						<h3>Age</h3>
						<p>40</p>
					</Grid>
					<Grid item xs={6} sm={3}>
						<h3>Residence</h3>
						<p>Germany</p>
					</Grid>
					<Grid item xs={6} sm={3}>
						<h3>Address</h3>
						<p>88 Some Street, Some Town</p>
					</Grid>
					<Grid item xs={6} sm={3}>
						<h3>Email</h3>
						<p>email@example.com</p>
					</Grid>
					<Grid item xs={6} sm={3}>
						<h3>Phone</h3>
						<p>+0123 123 456 789</p>
					</Grid>
					<Grid item xs={12}>
						<h2>What I Do</h2>
					</Grid>
					<Grid item xs={12} sm={6}>
						<h3>Enjoy the Life</h3>
						<p>
							Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
							tortor bibendum massa, sit amet ultricies ex lectus scelerisque
							nibh. Ut non sodales.
						</p>
					</Grid>
					<Grid item xs={12} sm={6}>
						<h3>Web Design</h3>
						<p>
							Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
							tortor bibendum massa, sit amet ultricies ex lectus scelerisque
							nibh. Ut non sodales.
						</p>
					</Grid>
					<Grid item xs={6} sm={3}>
						<h3>Copywriting</h3>
						<p>
							Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
							tortor bibendum massa, sit amet ultricies ex lectus scelerisque
							nibh. Ut non sodales.
						</p>
					</Grid>
					<Grid item xs={6} sm={3}>
						<h3>Management</h3>
						<p>
							Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
							tortor bibendum massa, sit amet ultricies ex lectus scelerisque
							nibh. Ut non sodales.
						</p>
					</Grid>
				</Grid>
			</ContentWrapper>
		</Layout>
	);
}

export default AboutPage;
