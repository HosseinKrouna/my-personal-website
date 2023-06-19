import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
	position: relative;
	height: 100vh;
`;

export const NavbarIcon = styled(Image)`
	position: absolute;
	top: 17px;
	right: 8px;
	cursor: pointer;
`;

export const MainContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	/* height: 100%; */
`;
