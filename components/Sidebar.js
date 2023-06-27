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
		link.href = "/assets/CV-Hossein_Krouna.pdf";
		link.download = "CV_Hossein_Krouna.pdf";
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
							<Image
								src={"/images/coder-cat.png"}
								alt="Profil Man"
								width={150}
								height={150}
							/>
						</ProfileImageWrapper>
					</ProfileImagePlaceholder>
					<DescriptionProfile>
						<NameProfile>Hossein Krouna</NameProfile>
						<ProfileDescription>Frontend-developer</ProfileDescription>
					</DescriptionProfile>

					<Stack mt={8} direction="column" spacing={4}>
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
									innerFillColor="white"
								/>
							</a>
							<a
								href="https://github.com/HosseinKrouna"
								target="_blank"
								rel="noopener noreferrer"
							>
								<GitHubIcon width="30" height="30" viewBox="0 0 400 400" />
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
