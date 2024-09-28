import Grid from "@mui/material/Grid2"
import styles from "./informations.module.css"

const Informations = () => {
	return (
		<Grid className={styles.informations}>
			<Grid>
				<p style={{ fontWeight: "700", fontSize: "36px", lineHeight: "40px" }}>Islam Mokrane</p>
				<p style={{ fontWeight: "500", fontSize: "18px", lineHeight: "28px", marginTop: 10 }}>
					Junior Software Engineer
				</p>
				<p style={{ fontWeight: "400", fontSize: "16px", lineHeight: "24px", color: "#94a3b8", marginTop: 15 }}>
					I build pixel-perfect, engaging, and accessible digital experiences.
				</p>
			</Grid>

			<Grid style={{ marginTop: 30 }}>Links</Grid>
		</Grid>
	)
}

export default Informations
