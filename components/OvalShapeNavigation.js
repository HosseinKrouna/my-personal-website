import { IconButton, SvgIcon } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import styled from "styled-components";
import { useRouter } from "next/router";

function OvalShapeNavigation() {
	const router = useRouter();
	const pages = ["/", "/about", "/projects", "/contact"];

	function handleNextPage() {
		const currenIndex = pages.indexOf(router.pathname);
		const nextPageIndex = (currenIndex + 1) % pages.length;
		router.push(pages[nextPageIndex]);
	}

	function handlePreviousPage() {
		const currentIndex = pages.indexOf(router.pathname);
		const previousPageIndex = (currentIndex - 1 + pages.length) % pages.length;
		router.push(pages[previousPageIndex]);
	}

	return (
		<Navigation>
			<IconButtonHover onClick={handleNextPage} sx={{ color: "white" }}>
				<SvgIcon>
					<ArrowForwardIosIcon />
				</SvgIcon>
			</IconButtonHover>
			<IconButtonHover onClick={handlePreviousPage} sx={{ color: "white" }}>
				<SvgIcon>
					<ArrowBackIosNewIcon />
				</SvgIcon>
			</IconButtonHover>
		</Navigation>
	);
}

const IconButtonHover = styled(IconButton)`
	&:hover {
		color: limegreen;
	}
`;

const Navigation = styled.div`
	position: absolute;
	bottom: 11px;
	right: 20px;
	width: 50px;
	height: 113px;
	border: 2px solid limegreen;
	border-radius: 40px / 40px;
	background-color: black;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export default OvalShapeNavigation;
