import { motion } from "framer-motion";

const animationVariants = [
	{ scale: 0.8, opacity: 0 },
	{ scale: 1.2, opacity: 0 },
	{ rotate: 360, opacity: 0 },
];

function RandomPageAnimation({ children }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			variants={
				animationVariants[Math.floor(Math.random() * animationVariants.length)]
			}
		>
			{children}
		</motion.div>
	);
}

export default RandomPageAnimation;
