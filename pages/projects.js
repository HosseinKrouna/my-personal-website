import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import styled from "styled-components";

function ProjectsPage() {
	const [projects, setProjects] = useState([]);

	const username = "HosseinKrouna";
	const apiUrl = `https://api.github.com/users/${username}/repos`;

	useEffect(() => {
		const desiredRepos = ["capstone-project", "my-personal-website"];

		fetch(apiUrl)
			.then((response) => response.json())
			.then((data) => {
				if (Array.isArray(data)) {
					const filteredProjects = data.filter((project) =>
						desiredRepos.includes(project.name)
					);
					setProjects(filteredProjects);
				} else {
					console.log("repositories call Failed");
				}
			})
			.catch((error) => {
				console.log("Error communicating with GitHub API:", error);
			});
	}, [apiUrl]);

	return (
		<Layout>
			<StyledTitle>My Projects</StyledTitle>
			<ul>
				{projects.map((project) => (
					<StyledProjectListItem key={project.id}>
						<ProjectCard project={project} />
					</StyledProjectListItem>
				))}
			</ul>
		</Layout>
	);
}

const StyledTitle = styled.h1`
	color: whitesmoke;
`;

const StyledProjectListItem = styled.li`
	list-style: none;
	margin: 14px;
`;

export default ProjectsPage;
