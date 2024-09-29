import Grid from "@mui/material/Grid2"
import InformationsSection from "./pageSections/Informations/Informations"
import ContentSection from "./pageSections/Content/Content"
import styles from "./page.module.css"

const Home = () => {
	return (
		<Grid className={styles.page}>
			<InformationsSection />
			<ContentSection />
		</Grid>
	)
}

export default Home
