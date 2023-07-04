import { useRef } from "react";
import Image from "next/image";
import { Stack } from "@mui/material";
import {
	ProfileDescription,
	NameProfile,
	DescriptionProfile,
	ProfileImageWrapper,
	SidebarContentWrapper,
	CloseIcon,
	SidebarContainer,
	SidebarContent,
	ProfileImagePlaceholder,
	SidebarLink,
	DownloadButton,
	SocialMediaIconsContainer,
	SocialMediaIconWrapper,
	ProfileImage,
} from "../components/styles/StyledSidebar";
import LinkedinIcon from "../components/svg/LinkedinIcon";
import GitHubIcon from "./svg/GitHubIcon";

function Sidebar({ isOpen, onClose }) {
	const SidebarContainerRef = useRef(null);

	function handleLinkClick() {
		if (onClose) {
			onClose();
		}
	}

	function handleDownloadClick() {
		const link = document.createElement("a");
		link.href = "/assets/cv_hossein-krouna_web-developer.pdf";
		link.download = "cv_hossein_krouna.pdf";
		link.target = "_blank";
		link.style.display = "none";
		document.body.appendChild(link);

		link.click();

		document.body.removeChild(link);
	}

	return (
		<SidebarContainer isOpen={isOpen} ref={SidebarContainerRef}>
			<CloseIcon
				src={"/icons/close.png"}
				alt="CloseIcon"
				width={50}
				height={50}
				onClick={onClose}
			/>

			<SidebarContent>
				<SidebarContentWrapper>
					<ProfileImagePlaceholder>
						<ProfileImageWrapper>
							<ProfileImage
								src={"/images/personal-website-image_background.png"}
								alt="Profil Image"
								width={135}
								height={174}
							/>
						</ProfileImageWrapper>
					</ProfileImagePlaceholder>
					<DescriptionProfile>
						<NameProfile>Hossein Krouna</NameProfile>
						<ProfileDescription>Web Developer</ProfileDescription>
					</DescriptionProfile>

					<Stack mt={5} direction="column" spacing={4}>
						<SidebarLink onClick={handleLinkClick} href="/">
							Home
						</SidebarLink>
						<SidebarLink onClick={handleLinkClick} href="/about">
							About
						</SidebarLink>
						<SidebarLink onClick={handleLinkClick} href="/projects">
							Projects
						</SidebarLink>
						<SidebarLink onClick={handleLinkClick} href="/contact">
							Contact
						</SidebarLink>
					</Stack>
					<SocialMediaIconsContainer>
						<SocialMediaIconWrapper>
							<a
								href="https://www.linkedin.com/in/krouna-hossein"
								target="_blank"
								rel="noopener noreferrer"
							>
								<LinkedinIcon
									width="30"
									height="30"
									viewBox="0 0 400 400"
									innerFillColor="whitesmoke"
								/>
							</a>
							<a
								href="https://github.com/HosseinKrouna"
								target="_blank"
								rel="noopener noreferrer"
							>
								<GitHubIcon
									width="30"
									height="30"
									viewBox="0 0 400 400"
									innerFillColor="whitesmoke"
								/>
							</a>
						</SocialMediaIconWrapper>
					</SocialMediaIconsContainer>
					<DownloadButton onClick={handleDownloadClick}>
						Download CV
					</DownloadButton>
				</SidebarContentWrapper>
			</SidebarContent>
		</SidebarContainer>
	);
}

export default Sidebar;
