import React from "react"
import Grid from "@mui/material/Grid2"
import styles from "./projects.module.css"
import { projects } from "@/app/utils/projects"
import Project from "./Project"
import Title from "../Title/Title"
import { useRouter } from "next/navigation"

const Projects = () => {
	const router = useRouter()

	const redirectToArchivePage = () => {
		router.push("/archive")
	}

	return (
		<Grid>
			<p className={styles.header}>PROJECTS</p>
			<Grid className={styles.projects_container}>
				{projects.map((project, index) => (
					<Project key={index} project={project} />
				))}
			</Grid>

			<Title title="View Full Project Archive" onClick={redirectToArchivePage} />
		</Grid>
	)
}

export default Projects
