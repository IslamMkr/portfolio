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

			<Title
				title="View Full Resume"
				onClick={() =>
					window.open("https://drive.google.com/file/d/1vhwoe2h6cpb9LVxNFYxFSA-VRdwnlKxc/view?usp=sharing", "_blank")
				}
			/>
		</Grid>
	)
}

export default Experiences
