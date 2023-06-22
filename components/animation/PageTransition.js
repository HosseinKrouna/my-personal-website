import { motion } from "framer-motion";

function PageTransition({ children, animation }) {
	const animations = {
		fadeIn: { opacity: 0 },
		slideLeft: { translateX: "100%" },
		slideUp: { translateY: "100%" },
	};
	const randomAnimation =
		animation ||
		Object.keys(animations)[
			Math.floor(Math.random() * Object.keys(animations).length)
		];

	return (
		<motion.div
			initial={animations[randomAnimation]}
			animate={{ opacity: 1, translateX: 0, translateY: 0 }}
			transition={{ duration: 1 }}
			className={randomAnimation}
		>
			{children}
		</motion.div>
	);
}

export default PageTransition;
