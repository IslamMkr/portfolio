import React from "react"
import Grid from "@mui/material/Grid2"
import styles from "./title.module.css"
import ArrowSVG from "../../assets/arrow.svg"

type TitleProps = {
	title: string
}

const Title = ({ title }: TitleProps) => {
	return (
		<Grid className={styles.title_container}>
			<p className={styles.title}>{title}</p>
			<Grid className={styles.svg_container}>
				<ArrowSVG className={styles.svg} />
			</Grid>
		</Grid>
	)
}

export default Title
