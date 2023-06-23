import {
	Card,
	CardContent,
	Typography,
	Button,
	CardMedia,
	CardActionArea,
} from "@mui/material";

function ProjectCard({ project }) {
	return (
		<Card
			sx={{
				maxWidth: 345,
				backgroundColor: "rgba(255, 255, 255, 0.8)",
				boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
			}}
		>
			<CardActionArea>
				<CardMedia
					component="img"
					height="140"
					image={`/images/${project.name}.png`}
					alt={`Wireframe ${project.name}`}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{project.name}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{project.description}
					</Typography>
				</CardContent>
			</CardActionArea>
			<Button href={project.html_url} target="_blank" rel="noopener noreferrer">
				View on GitHub
			</Button>
		</Card>
	);
}

export default ProjectCard;
