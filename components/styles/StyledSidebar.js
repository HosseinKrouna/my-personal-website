import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";

export const SocialMediaIconsContainer = styled.div`
	padding-top: 38px;
	gap: 14px;
`;

export const SocialMediaIconWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 8px;
	width: 76px;
	height: 62px;
	cursor: pointer;

	&:hover {
		fill: limegreen;
	}
`;

export const DownloadButton = styled.button`
	position: absolute;
	bottom: 72px;
	height: 58px;
	width: 154px;
	border: 2px solid whitesmoke;
	border-radius: 40px / 40px;
	background-color: transparent;
	color: whitesmoke;
	font-size: 18px;
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: black;
	}
`;

export const ProfileDescription = styled.p`
	margin: 0;
	color: whitesmoke;
`;

export const NameProfile = styled.h2`
	margin: 0;

	color: whitesmoke;
`;

export const DescriptionProfile = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const SidebarContentWrapper = styled.div`
	width: 100%;
	max-width: 300px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

export const CloseIcon = styled(Image)`
	position: absolute;
	top: 10px;
	right: 10px;
	cursor: pointer;
`;

export const SidebarContainer = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	width: 66.666%;
	height: 100%;
	background-color: #525252;
	background-image: url("https://www.transparenttextures.com/patterns/wall-4-light.png");
	/* background-color: #525252; */
	z-index: 1001;
	transition: right 0.5s ease-in-out;
	right: ${(props) => (props.isOpen ? "0" : "-66.666%")};
	box-shadow: 0 8px 20px rgba(0, 0, 0, 0.9);
`;

export const SidebarContent = styled.div`
	width: 100%;
	max-width: 300px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ProfileImageWrapper = styled.div`
	margin-top: 10px;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ProfileImagePlaceholder = styled.div`
	width: 150px;
	height: 150px;
	border-radius: 50%;
	background-color: transparent;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 20px;
	box-shadow: 14px 8px 25px rgba(0, 0, 0.9, 0.9);
	overflow: hidden;
`;

export const ProfileImage = styled(Image)`
	/* width: 100%;
	height: 100%; */
	object-fit: cover;
	object-position: center;
	border-radius: 50%;
`;

export const SidebarLink = styled.a`
	color: ${(props) =>
		props.href === useRouter().pathname ? "limegreen" : "whitesmoke"};
	text-decoration: none;
	font-size: 25px;
	&:hover,
	&:active {
		color: limegreen;
	}
	cursor: pointer;
`;
