import { useRef, useEffect, useCallback, useState } from "react";
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

function Sidebar({ onClose }) {
	const SidebarContainerRef = useRef(null);

	const [isOpen, setIsOpen] = useState(false);

	// const handleClose = useCallback(() => {
	// 	if (onClose) {
	// 		onClose();
	// 	}
	// }, [onClose]);
	const toggleSidebar = useCallback(() => {
		setIsOpen((prevOpen) => !prevOpen);
	}, []);

	useEffect(() => {
		function handleOutsideClick(event) {
			if (
				SidebarContainerRef.current &&
				!SidebarContainerRef.current.contains(event.target)
			) {
				toggleSidebar();
			}
		}

		document.addEventListener("click", handleOutsideClick);

		return () => {
			document.removeEventListener("click", handleOutsideClick);
		};
	}, [toggleSidebar]);

	function handleLinkClick() {
		if (onClose) {
			onClose();
		}
	}

	return (
		<SidebarContainer isOpen={isOpen} ref={SidebarContainerRef}>
			<CloseIcon
				src={"/icons/close.png"}
				alt="CloseIcon"
				width={50}
				height={50}
				onClick={toggleSidebar}
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
				</SidebarContentWrapper>
			</SidebarContent>
		</SidebarContainer>
	);
}

export default Sidebar;
