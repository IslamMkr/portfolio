"use client"

import React, { useEffect } from "react"
import Grid from "@mui/material/Grid2"
import styles from "./archive.module.css"
import ArrowSVG from "../assets/arrow.svg"
import { useRouter } from "next/navigation"
import Tag from "../components/Tag/Tag"
import GithubSVG from "../assets/github.svg"
import LinkSVG from "../assets/link.svg"

import { projects } from "../utils/projects"

const Archive = () => {
	const router = useRouter()

	useEffect(() => {
		const lighthouse = document.querySelector(".lighthouse")! as HTMLElement
		document.addEventListener("pointermove", (e) => {
			lighthouse.style.display = "block"

			if (e.pageY > window.innerHeight - 100) {
				return
			}

			lighthouse.animate(
				{
					top: e.pageY - 100 + "px",
					left: e.pageX - 100 + "px",
				},
				{
					duration: 100,
					fill: "forwards",
				}
			)
		})

		return () => {
			document.removeEventListener("pointermove", () => {})
		}
	}, [])

	const openProjectLink = (link: string) => {
		window.open(link, "_blank")
	}

	return (
		<Grid className={styles.page}>
			<span
				className="lighthouse"
				style={{
					border: "1px solid white",
					position: "absolute",
					width: 200,
					height: 200,
					backgroundColor: "#5a83ec",
					borderRadius: "50%",
					filter: "blur(200px)",
					zIndex: -1,
				}}
			/>
			<Grid className={styles.container}>
				<Grid className={styles.name_container} onClick={() => router.back()}>
					<ArrowSVG className={styles.arrow} />
					<p className={styles.name}>Islam Mokrane</p>
				</Grid>

				<h1 className={styles.title}>All Projects</h1>
				<table className={styles.table}>
					<thead className={styles.header}>
						<tr>
							<th className={`${styles.th} ${styles.year}`}>Year</th>
							<th className={`${styles.th} ${styles.pro}`}>Project</th>
							<th className={`${styles.th} ${styles.madeat}`}>Made at</th>
							<th className={`${styles.th} ${styles.techs}`}>Built with</th>
							<th className={`${styles.th} ${styles.link}`}>Link</th>
						</tr>
					</thead>
					<tbody>
						{projects.map((project) => (
							<tr key={project.title}>
								<td className={`${styles.td} ${styles.year} ${styles.shadowed}`}>{project.year}</td>
								<td className={`${styles.td} ${styles.project}  ${styles.pro}`}>{project.title}</td>
								<td className={`${styles.td} ${styles.project} ${styles.shadowed} ${styles.madeat}`}>
									{project.company ?? ""}
								</td>
								<td className={`${styles.td} ${styles.project} ${styles.techs}`}>
									<Grid className={styles.tags_container}>
										{project.technologies.map((tech) => (
											<Tag key={tech} tag={tech} />
										))}
									</Grid>
								</td>
								<td className={`${styles.link} ${styles.td} ${styles.project} ${styles.shadowed}`}>
									{project.link === undefined && ""}
									{project.link !== undefined && project.link.includes("github") && (
										<GithubSVG className={styles.svg} onClick={() => openProjectLink(project.link!)} />
									)}
									{project.link !== undefined && !project.link.includes("github") && (
										<LinkSVG className={styles.svg} onClick={() => openProjectLink(project.link!)} />
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</Grid>
		</Grid>
	)
}

export default Archive
