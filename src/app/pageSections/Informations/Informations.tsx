"use client"

import { useEffect, useState } from "react"
import Grid from "@mui/material/Grid2"
import styles from "./informations.module.css"
import GitlabSVG from "../../assets/gitlab.svg"
import GithubSVG from "../../assets/github.svg"
import LinkedInSVG from "../../assets/linkedin.svg"
import EmailSVG from "../../assets/email.svg"
import WhatsAppSVG from "../../assets/whatsapp.svg"

const sections = [
	{ id: "about", label: "about" },
	{ id: "experiences", label: "experiences" },
	{ id: "projects", label: "projects" },
]

const InformationsSection = () => {
	const [activeSection, setActiveSection] = useState<"about" | "experiences" | "projects">("about")

	useEffect(() => {
		const handleIntersection = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActiveSection(entry.target.id as "about" | "experiences" | "projects")
				}
			})
		}

		const observer = new IntersectionObserver(handleIntersection, {
			root: null,
			threshold: 0.6,
		})

		sections.forEach(({ id }) => {
			const section = document.getElementById(id)
			if (section) observer.observe(section)
		})

		return () => observer.disconnect()
	}, [])

	const handleSectionClick = (section: "about" | "experiences" | "projects") => {
		const sectionElement = document.getElementById(section)
		if (sectionElement) {
			sectionElement.scrollIntoView({
				behavior: "smooth",
				block: "start",
			})
		}
	}

	const openMyGithubPage = () => {
		window.open("https://github.com/IslamMkr", "_blank")
	}

	const openMyLinkedInPage = () => {
		window.open("https://www.linkedin.com/in/islam-mokrane/", "_blank")
	}

	const openMyGitlabPage = () => {
		window.open("https://gitlab.com/IslamMkr", "_blank")
	}

	const callMe = () => {
		const phoneNumber = "+33621797359"
		window.open(`https://wa.me/${phoneNumber}`, "_blank")
	}

	const openOutlook = () => {
		const email = "mokraneislam@hotmail.com"
		window.open(`mailto:${email}`, "_blank")
	}

	return (
		<Grid className={styles.container}>
			<Grid className={styles.informations}>
				<Grid className={styles.upperSection}>
					<Grid>
						<p className={styles.name}>Islam Mokrane</p>
						<p className={styles.occupation}>Software Engineer</p>
						<p className={styles.introduction}>
							Crafting high-performance, intuitive digital solutions while ensuring quality, accessibility, and seamless
							user experiences.
						</p>
					</Grid>

					<Grid className={styles.sections}>
						<Grid
							className={`${styles.section} ${activeSection === "about" ? styles.active : ""}`}
							onClick={() => handleSectionClick("about")}>
							<hr className={styles.sectionLine} />
							<p className={styles.sectionTitle}>ABOUT</p>
						</Grid>
						<Grid
							className={`${styles.section} ${activeSection === "experiences" ? styles.active : ""}`}
							onClick={() => handleSectionClick("experiences")}>
							<hr className={styles.sectionLine} />
							<p className={styles.sectionTitle}>EXPERIENCES</p>
						</Grid>
						<Grid
							className={`${styles.section} ${activeSection === "projects" ? styles.active : ""}`}
							onClick={() => handleSectionClick("projects")}>
							<hr className={styles.sectionLine} />
							<p className={styles.sectionTitle}>PROJECTS</p>
						</Grid>
					</Grid>
				</Grid>

				<Grid className={styles.links}>
					<GitlabSVG alt="Gitlab" className={styles.svg} onClick={openMyGitlabPage} />
					<GithubSVG alt="Github" className={styles.svg} onClick={openMyGithubPage} />
					<LinkedInSVG alt="LinkedIn" className={styles.svg} onClick={openMyLinkedInPage} />
					<EmailSVG alt="Email" className={styles.svg} onClick={openOutlook} />
					<WhatsAppSVG alt="WhatsApp" className={styles.svg} onClick={callMe} />
				</Grid>
			</Grid>
		</Grid>
	)
}

export default InformationsSection
