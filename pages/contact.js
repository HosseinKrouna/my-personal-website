import Layout from "../components/Layout";
import ContactCard from "../components/ContactCard";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("../components/MainMap"), {
	ssr: false,
});

const markerLocation = {
	id: uuidv4(),
	name: "Frankfurt am Main",
	lat: 50.1109,
	lon: 8.6821,
};

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
		<>
			<Layout>
				<StyledTitle>Contact Me</StyledTitle>
				{contactData.map((contact) => (
					<ContactCard
						key={uuidv4()}
						title={contact.title}
						icon={contact.icon}
						value={contact.value}
					/>
				))}
				<DynamicMap markerLocation={markerLocation} />
			</Layout>
		</>
	);
}

const StyledTitle = styled.h1`
	color: whitesmoke;
`;

export default ContactPage;
