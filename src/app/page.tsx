"use client"

import { useEffect } from "react"
import Grid from "@mui/material/Grid2"
import InformationsSection from "./pageSections/Informations/Informations"
import ContentSection from "./pageSections/Content/Content"
import styles from "./page.module.css"

const Home = () => {
	const scrollHandler = (e: React.WheelEvent<HTMLDivElement>) => {
		document.querySelector(".scrollable")!.scrollTop += e.deltaY
	}

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

	return (
		<Grid className={styles.page} onWheel={scrollHandler}>
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
			<InformationsSection />
			<ContentSection />
		</Grid>
	)
}

export default Home
