import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { Stack } from "@mui/material";

function ContactCard({ value, icon }) {
	const handleCopy = () => {
		navigator.clipboard
			.writeText(value)
			.then(() => {
				console.log("Value successfully copied to the clipboard:", value);
			})
			.catch((error) => {
				console.error("Error copying to clipboard:", error);
			});
	};

	return (
		<Card
			sx={{
				maxWidth: 345,
				backgroundColor: "rgba(255, 255, 255, 0.4)",
				boxShadow: "2px 6px 6px rgba(0, 0, 0.5, 0.9)",
				margin: "16px",
				transition: "background-color 0.3s ease",
				"&:hover": {
					backgroundColor: "rgba(255, 255, 255, 0.8)",
				},
				position: "relative",
			}}
		>
			<CardContent>
				<Stack>
					<IconButton
						sx={{
							position: "absolute",
							top: "5px",
							right: "5px",
						}}
						onClick={() => handleCopy(value)}
					>
						<FileCopyIcon />
					</IconButton>
				</Stack>

				<Typography sx={{ color: "limegreen" }} variant="h5" component="div">
					{icon}
				</Typography>
				<Typography variant="body2">{value}</Typography>
			</CardContent>
		</Card>
	);
}

export default ContactCard;
