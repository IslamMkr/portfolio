import React from "react"
import Grid from "@mui/material/Grid2"
import styles from "./about.module.css"

const About = () => {
	return (
		<Grid>
  <p className={styles.header}>ABOUT</p>
  <p className={styles.about}>
    I started coding in 2016 and quickly became passionate about software development. Over the years, I’ve had the
    chance to contribute to impactful projects — from building internal tools for an{" "}
    <a
      href="https://www.linkedin.com/company/bouira-d-ing%C3%A9nierie-industrielle/"
      target="_blank"
      className={styles.aboutLinks}
    >
      industrial engineering company
    </a>
    , to redesigning the authentication system of a{" "}
    <a href="https://app.hupla.fr/entry" target="_blank" className={styles.aboutLinks}>
      growing start-up
    </a>
    , and more recently, working on fullstack AI-powered features at{" "}
    <a href="https://www.doctrine.fr" target="_blank" className={styles.aboutLinks}>
      Doctrine
    </a>
    .
  </p>
  <p className={styles.about}>
    Today, I focus on building performant, secure, and accessible digital experiences using TypeScript, React, and Node.js.
    I enjoy working across the stack, especially where clean design meets scalable engineering.
  </p>
  <p className={styles.about}>
    Outside of work, I’m often experimenting with new technologies, working on side projects, or improving my coding
    workflows. When I’m not in front of a screen, I’m usually playing chess, exploring new places, or diving into a good
    book.
  </p>
</Grid>

	)
}

export default About
