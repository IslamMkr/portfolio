import React from "react"
import Grid from "@mui/material/Grid2"
import styles from "./experiences.module.css"
import ArrowSVG from "../../assets/arrow.svg"
import type { Experience } from "@/app/utils/experiences"
import Tag from "../Tag/Tag"

interface ExperienceProps {
	experience: Experience
}

const Experience = ({ experience }: ExperienceProps) => {
	const { title, period, description, technologies, link } = experience

	return (
		<Grid className={styles.card}>
			<Grid>
				<p className={styles.period}>{period}</p>
			</Grid>
			<Grid>
				<Grid className={styles.title_container}>
					<p className={styles.title}>{title}</p>
					<Grid className={styles.svg_container}>
						<ArrowSVG className={styles.svg} />
					</Grid>
				</Grid>
				<p className={styles.description}>{description}</p>
				<Grid className={styles.techs_container}>
					{technologies.map((tech, index) => (
						<Tag key={index} tag={tech} />
					))}
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Experience
