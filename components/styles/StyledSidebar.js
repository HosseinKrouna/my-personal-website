import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";

export const SocialMediaIconsContainer = styled.div``;

export const SocialMediaIcon = styled(Image)``;

export const DownloadButton = styled.button`
	position: absolute;
	bottom: 26px;
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

export const ProfileImageWrapper = styled.div`
	margin-top: 10px;
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
	z-index: 999;
	transition: right 0.3s ease-in-out;
	right: ${(props) => (props.isOpen ? "0" : "-66.666%")};
`;

export const SidebarContent = styled.div`
	width: 100%;
	max-width: 300px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ProfileImagePlaceholder = styled.div`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	background-color: #ccc;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 20px;
`;

export const SidebarLink = styled.a`
	color: ${(props) =>
		props.href === useRouter().pathname ? "limegreen" : "whitesmoke"};
	text-decoration: none;
	font-size: 25px;

	cursor: pointer;
`;
