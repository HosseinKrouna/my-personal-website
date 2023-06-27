import {
	Card,
	CardContent,
	Typography,
	Button,
	CardMedia,
	CardActionArea,
} from "@mui/material";

function ProjectCard({ project }) {
	const projectDemoLinks = [
		{ name: "capstone-project", url: "https://friends-wall.vercel.app/" },
		{ name: "my-personal-website", url: "https://hossein-krouna.vercel.app/" },
	];

	const projectLink = projectDemoLinks.find(
		(demoLink) => demoLink.name === project.name
	);

	return (
		<Card
			sx={{
				maxWidth: 345,
				backgroundColor: "rgba(255, 255, 255, 0.7)",
				boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
			}}
		>
			<CardActionArea>
				{projectLink && (
					<Button
						href={projectLink.url}
						rel="noopener noreferrer"
						target="_blank"
					>
						Show Demo
					</Button>
				)}

				<CardMedia
					component="img"
					image={`/images/${project.name}.png`}
					alt={`Mockup IPhone SE Design ${project.name}`}
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
