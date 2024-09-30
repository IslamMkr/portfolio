import React from "react"
import Grid from "@mui/material/Grid2"
import styles from "./about.module.css"

const About = () => {
	return (
		<Grid>
			<p className={styles.header}>ABOUT</p>
			<p className={styles.about}>
				Back in 2016, I took my first steps into the world of coding and quickly found myself captivated by software
				development. Fast forward to today, I’ve had the opportunity to build software for a{" "}
				<a href="https://app.hupla.fr/entry" target="_blank" className={styles.aboutLinks}>
					start-up
				</a>
				, work on{" "}
				<a href="https://www.ollca.com/" target="_blank" className={styles.aboutLinks}>
					e-commerce platforms
				</a>
				, and contribute to web solutions for an{" "}
				<a
					href="https://www.linkedin.com/company/bouira-d-ing%C3%A9nierie-industrielle/"
					target="_blank"
					className={styles.aboutLinks}>
					industrial engineering company
				</a>
				.
			</p>
			<p className={styles.about}>
				Currently, my main focus is developing high-performance, intuitive, and accessible digital solutions. I love
				working at the intersection of design and engineering — creating software that not only looks great but also
				performs seamlessly under the hood.
			</p>
			<p className={styles.about}>
				In my free time, I explore new technologies, refine my coding skills, and work on personal projects like
				building dynamic web apps. When I’m not coding, you’ll find me playing chess, exploring new places, or enjoying
				a good book.
			</p>
		</Grid>
	)
}

export default About
