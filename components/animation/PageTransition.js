import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const animationVariants = [
	{ scale: 0.8, opacity: 0 },
	{ scale: 1.2, opacity: 0 },
	{ rotate: 360, opacity: 0 },
];

function getRandomVariant() {
	return animationVariants[
		Math.floor(Math.random() * animationVariants.length)
	];
}

function PageTransition({ children }) {
	const [randomVariant, setRandomVariant] = useState(getRandomVariant());

	useEffect(() => {
		setRandomVariant(getRandomVariant());
	}, [children]);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			variants={{ animate: randomVariant }}
			key={JSON.stringify(randomVariant)}
		>
			{children}
		</motion.div>
	);
}

export default PageTransition;
