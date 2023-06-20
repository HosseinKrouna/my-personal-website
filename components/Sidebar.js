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
	SocialMediaIcon,
} from "../components/styles/StyledSidebar";

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
								src={"/images/man.png"}
								alt="Profil Man"
								width={100}
								height={100}
							/>
						</ProfileImageWrapper>
					</ProfileImagePlaceholder>
					<DescriptionProfile>
						<NameProfile>Hossein Krouna</NameProfile>
						<ProfileDescription>Frontend-developer</ProfileDescription>
					</DescriptionProfile>

					<Stack mt={8} direction="column" spacing={6}>
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
						<SocialMediaIcon
							src="/icons/linkedin.png"
							alt="linkedin icon"
							width={20}
							height={20}
						/>
						<SocialMediaIcon
							src="/icons/github.png"
							alt="github icon"
							width={20}
							height={20}
						/>
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
