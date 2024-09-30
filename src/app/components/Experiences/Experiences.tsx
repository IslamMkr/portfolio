import React from "react"
import Grid from "@mui/material/Grid2"
import styles from "./experiences.module.css"
import Experience from "./Experience"
import { experiences } from "../../utils/experiences"

const Experiences = () => {
	return (
		<Grid>
			<p className={styles.header}>EXPERIENCES</p>
			<Grid container direction="column" style={{ gap: 55 }}>
				{experiences.map((experience, index) => (
					<Experience key={index} experience={experience} />
				))}
			</Grid>
		</Grid>
	)
}

export default Experiences
