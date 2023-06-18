import { useRef, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import { Stack } from "@mui/material";
import Link from "next/link";

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
					<Stack direction="column" spacing={10}>
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

const ProfileImageWrapper = styled.div`
	margin-top: 10px;
`;

const SidebarContentWrapper = styled.div`
	width: 100%;
	max-width: 300px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const CloseIcon = styled(Image)`
	position: absolute;
	top: 10px;
	right: 10px;
	cursor: pointer;
`;

const SidebarContainer = styled.div`
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

const SidebarContent = styled.div`
	width: 100%;
	max-width: 300px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ProfileImagePlaceholder = styled.div`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	background-color: #ccc;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 20px;
`;

const SidebarLink = styled(Link)`
	color: white;
	text-decoration: none;
	font-size: 16px;
	cursor: pointer;
`;

export default Sidbar;
