import Grid from "@mui/material/Grid2"
import Image from "next/image"
import styles from "./informations.module.css"
import GithubSVG from "../../assets/github.svg"
import LinkedInSVG from "../../assets/linkedin.svg"

const Informations = () => {
	return (
		<Grid className={styles.informations}>
			<Grid>
				<p className={styles.name}>Islam Mokrane</p>
				<p className={styles.occupation}>Junior Software Engineer</p>
				<p className={styles.introduction}>I build pixel-perfect, engaging, and accessible digital experiences.</p>
			</Grid>

			<Grid className={styles.links} style={{ marginTop: 30 }}>
				<Image src={GithubSVG} alt="Github" width={24} height={24} />
				<Image src={LinkedInSVG} alt="LinkedIn" width={24} height={24} />
			</Grid>
		</Grid>
	)
}

export default Informations
