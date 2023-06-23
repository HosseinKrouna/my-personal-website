import { motion } from "framer-motion";

function PageTransition({ children, animation }) {
	const animations = {
		fadeIn: { opacity: 0 },
		slideLeft: { translateX: "100%" },
		slideUp: { translateY: "100%" },
	};
	const selectedAnimation = animations[animation] || animations.fadeIn;

	return (
		<motion.div
			initial={selectedAnimation}
			animate={{ opacity: 1, translateX: 0, translateY: 0 }}
			transition={{ duration: 1 }}
			className={animation}
		>
			{children}
		</motion.div>
	);
}

export default PageTransition;
