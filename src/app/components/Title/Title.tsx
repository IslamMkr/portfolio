import React from "react"
import Grid from "@mui/material/Grid2"
import styles from "./title.module.css"
import ArrowSVG from "../../assets/arrow.svg"

type TitleProps = {
	title: string
	onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const Title = ({ title, onClick }: TitleProps) => {
	const handleClickEvent = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (onClick !== undefined) {
			onClick(e)
		}
	}

	return (
		<Grid className={styles.title_container} onClick={handleClickEvent}>
			<p className={styles.title}>{title}</p>
			<Grid className={styles.svg_container}>
				<ArrowSVG className={styles.svg} />
			</Grid>
		</Grid>
	)
}

export default Title
