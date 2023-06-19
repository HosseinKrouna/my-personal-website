import { useRef, useEffect } from "react";
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
} from "../components/styles/StyledSidebar";

function Sidbar({ isOpen, onClose }) {
	const sidebarContentRef = useRef(null);

	useEffect(() => {
		if (isOpen) {
			sidebarContentRef.current.style.display = "block";
		} else {
			sidebarContentRef.current.style.display = "none";
		}
	}, [isOpen]);

	function handleClose() {
		if (onClose) {
			onClose();
		}
	}

	return (
		<SidebarContainer isOpen={isOpen}>
			<CloseIcon
				src={"/icons/close.png"}
				alt="CloseIcon"
				width={50}
				height={50}
				onClick={handleClose}
			/>
			<SidebarContent ref={sidebarContentRef}>
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
						<SidebarLink href="/">Home</SidebarLink>
						<SidebarLink href="/about">About</SidebarLink>
						<SidebarLink href="/projects">Projects</SidebarLink>
						<SidebarLink href="/contact">Contact</SidebarLink>
					</Stack>
				</SidebarContentWrapper>
			</SidebarContent>
		</SidebarContainer>
	);
}

export default Sidbar;
