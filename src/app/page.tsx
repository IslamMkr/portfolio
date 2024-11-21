"use client"

import Grid from "@mui/material/Grid2"
import InformationsSection from "./pageSections/Informations/Informations"
import ContentSection from "./pageSections/Content/Content"
import styles from "./page.module.css"

const Home = () => {
	const scrollHandler = (e: React.WheelEvent<HTMLDivElement>) => {
		document.querySelector(".scrollable")!.scrollTop += e.deltaY
	}

	return (
		<Grid className={styles.page} onWheel={scrollHandler}>
			<InformationsSection />
			<ContentSection />
		</Grid>
	)
}

export default Home
