import { motion } from "framer-motion";
import RandomPageAnimation from "../animation/RandomPageAnimation";

const pageVariants = {
	initial: {
		opacity: 0,
		y: "100%",
	},
	enter: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: "easeInOut",
		},
	},
	exit: {
		opacity: 0,
		y: "-100%",
		transition: {
			duration: 0.5,
			ease: "easeInOut",
		},
	},
};

function PageTransition({ children }) {
	return (
		<motion.div
			initial="initial"
			animate="enter"
			exit="exit"
			variants={pageVariants}
		>
			<RandomPageAnimation>{children}</RandomPageAnimation>
		</motion.div>
	);
}

export default PageTransition;
