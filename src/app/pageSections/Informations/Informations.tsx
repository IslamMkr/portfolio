"use client"

import { useState } from "react"
import Grid from "@mui/material/Grid2"
import styles from "./informations.module.css"
import GithubSVG from "../../assets/github.svg"
import LinkedInSVG from "../../assets/linkedin.svg"

const InformationsSection = () => {
	const [activeSection, setActiveSection] = useState<"about" | "experiences" | "projects">("about")

	const openMyGithubPage = () => {
		window.open("https://github.com/IslamMkr", "_blank")
	}

	const openMyLinkedInPage = () => {
		window.open("https://www.linkedin.com/in/islam-mokrane/", "_blank")
	}

	return (
		<Grid className={styles.container}>
			<Grid className={styles.informations}>
				<Grid className={styles.upperSection}>
					<Grid>
						<p className={styles.name}>Islam Mokrane</p>
						<p className={styles.occupation}>Junior Software Engineer</p>
						<p className={styles.introduction}>
							Crafting high-performance, intuitive digital solutions while ensuring quality, accessibility, and seamless
							user experiences.
						</p>
					</Grid>

					<Grid className={styles.sections}>
						<Grid
							className={`${styles.section} ${activeSection === "about" ? styles.active : ""}`}
							onClick={() => setActiveSection("about")}>
							<hr className={styles.sectionLine} />
							<p className={styles.sectionTitle}>ABOUT</p>
						</Grid>
						<Grid
							className={`${styles.section} ${activeSection === "experiences" ? styles.active : ""}`}
							onClick={() => setActiveSection("experiences")}>
							<hr className={styles.sectionLine} />
							<p className={styles.sectionTitle}>EXPERIENCES</p>
						</Grid>
						<Grid
							className={`${styles.section} ${activeSection === "projects" ? styles.active : ""}`}
							onClick={() => setActiveSection("projects")}>
							<hr className={styles.sectionLine} />
							<p className={styles.sectionTitle}>PROJECTS</p>
						</Grid>
					</Grid>
				</Grid>

				<Grid className={styles.links}>
					<GithubSVG alt="Github" className={styles.svg} onClick={openMyGithubPage} />
					<LinkedInSVG alt="LinkedIn" className={styles.svg} onClick={openMyLinkedInPage} />
				</Grid>
			</Grid>
		</Grid>
	)
}

export default InformationsSection
