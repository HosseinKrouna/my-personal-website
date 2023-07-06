import Layout from "../components/Layout";
import ContactCard from "../components/ContactCard";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import dynamic from "next/dynamic";
import { HighlightedText } from "../components/styles/StyledAbout";
import { Grid } from "@mui/material";
import OvalShapeNavigation from "@/components/OvalShapeNavigation";

const DynamicMap = dynamic(() => import("../components/MainMap"), {
	ssr: false,
});

function ContactPage() {
	const contactData = [
		{
			icon: "email",
			value: "hossein.krouna@googlemail.com",
		},
		{
			icon: "phone",
			value: "+49 152 51 00 55 15",
		},
		{
			icon: "location",
			value: "Rebhuhnstraße 35, 65933 Frankfurt/M, Germany",
		},
	];

	return (
		<Layout>
			<Grid
				container
				sx={{ height: "100%", display: "flex", flexDirection: "column" }}
			>
				<StyledTitle>
					Contact<HighlightedText>Me</HighlightedText>
				</StyledTitle>
				{contactData.map((contact) => (
					<ContactCard
						key={uuidv4()}
						title={contact.title}
						icon={contact.icon}
						value={contact.value}
					/>
				))}
				{/* //FIXME - map jerky during animation.
check z index of map */}
				<div style={{ zIndex: -1000 }}>
					<DynamicMap />
				</div>

				<OvalShapeNavigation
					sx={{ position: "absolute", bottom: 0, right: 0 }}
				/>
			</Grid>
		</Layout>
	);
}

const StyledTitle = styled.h1`
	color: whitesmoke;
`;

export default ContactPage;
