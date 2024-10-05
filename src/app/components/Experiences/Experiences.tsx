import React from "react"
import Grid from "@mui/material/Grid2"
import styles from "./experiences.module.css"
import Experience from "./Experience"
import { experiences } from "../../utils/experiences"
import Title from "../Title/Title"

const Experiences = () => {
	return (
		<Grid>
			<p className={styles.header}>EXPERIENCES</p>
			<Grid className={styles.experiences_container}>
				{experiences.map((experience, index) => (
					<Experience key={index} experience={experience} />
				))}
			</Grid>

			<Title title="View Full Résumé" />
		</Grid>
	)
}

export default Experiences
