import React from "react"
import Grid from "@mui/material/Grid2"
import About from "@/app/components/About/About"
import Experiences from "@/app/components/Experiences/Experiences"
import Projects from "@/app/components/Projects/Projects"
import styles from "./content.module.css"
import Credit from "@/app/components/Credit/Credit"

const ContentSection = () => {
	return (
		<Grid className={`${styles.container} scrollable`}>
			<Grid id="about" className={styles.content}>
				<About />
				<Experiences />
				<Projects />
				<Credit />
			</Grid>
		</Grid>
	)
}

export default ContentSection
