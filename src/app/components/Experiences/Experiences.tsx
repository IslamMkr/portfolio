import React from "react"
import Grid from "@mui/material/Grid2"
import styles from "./experiences.module.css"
import Experience from "./Experience"
import { experiences } from "../../utils/experiences"
import Title from "../Title/Title"

const Experiences = () => {
	return (
		<Grid id="experiences" style={{ paddingTop: 80 }}>
			<p className={styles.header}>EXPERIENCES</p>
			<Grid className={styles.experiences_container}>
				{experiences.map((experience, index) => (
					<Experience key={index} experience={experience} />
				))}
			</Grid>

			<Title
				title="View Full Resume"
				onClick={() =>
					window.open("https://drive.google.com/file/d/1nY6pJUASo160JpgsVQPTLMAJIxSWFkz2/view?usp=sharing", "_blank")
				}
			/>
		</Grid>
	)
}

export default Experiences
