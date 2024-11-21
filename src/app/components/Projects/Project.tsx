import React from "react"
import Grid from "@mui/material/Grid2"
import Tag from "../Tag/Tag"
import styles from "./projects.module.css"
import ArrowSVG from "../../assets/arrow.svg"
import type { Project } from "../../utils/projects"

interface ProjectProps {
	project: Project
}

const Project = ({ project }: ProjectProps) => {
	const { title, description, technologies, link, image } = project

	const openProjectWebsite = () => {
		if (!link) {
			return
		}

		window.open(link, "_blank")
	}

	return (
		<Grid className={styles.card} onClick={openProjectWebsite}>
			<Grid>
				<Grid className={styles.title_container}>
					<p className={styles.title}>{title}</p>
					<Grid className={styles.svg_container}>
						<ArrowSVG className={styles.svg} />
					</Grid>
				</Grid>
				<p className={styles.description}>{description}</p>
				{technologies && technologies.length > 0 && (
					<Grid className={styles.techs_container}>
						{technologies.map((tech, index) => (
							<Tag key={index} tag={tech} />
						))}
					</Grid>
				)}
			</Grid>
			<Grid>
				<img alt="Project" src={image} className={styles.image} />
			</Grid>
		</Grid>
	)
}

export default Project
