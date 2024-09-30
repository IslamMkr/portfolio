import React from "react"
import Grid from "@mui/material/Grid2"
import styles from "./tag.module.css"

interface TagProps {
	tag: string
}

const Tag = ({ tag }: TagProps) => {
	return (
		<Grid className={styles.tag_container}>
			<p className={styles.tag_text}>{tag}</p>
		</Grid>
	)
}

export default Tag
