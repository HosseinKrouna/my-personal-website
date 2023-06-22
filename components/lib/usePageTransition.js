import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fadeIn, slideLeft, slideUp } from "../animation/StyledAnimation";

function usePageTransition(targetPages) {
	const router = useRouter();

	const [animation, setAnimation] = useState("");

	useEffect(() => {
		const handlePageTransition = () => {
			const randomAnimations = [fadeIn, slideLeft, slideUp];

			if (targetPages.includes(router.pathname)) {
				const randomAnimation =
					randomAnimations[Math.floor(Math.random() * randomAnimations.length)];

				console.log(
					`Page Transition to ${router.pathname} with animation: ${randomAnimation.name}`
				);
				setAnimation(randomAnimation.name);
			}
		};

		router.events.on("routeChangeComplete", handlePageTransition);

		return () => {
			router.events.off("routeChangeComplete", handlePageTransition);
		};
	}, [router.pathname, targetPages, router.events]);

	return animation;
}

export default usePageTransition;
