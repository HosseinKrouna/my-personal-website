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
			value: "example@example.com",
		},
		{
			icon: "phone",
			value: "+1234567890",
		},
		{
			icon: "location",
			value: "123 Main St, City, Country",
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

				<DynamicMap />
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
