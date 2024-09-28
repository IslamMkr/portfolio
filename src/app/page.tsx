import Grid from "@mui/material/Grid2"
import Informations from "./components/Informations/Informations"
import styles from "./page.module.css"

const Home = () => {
	return (
		<Grid
			container
			className={styles.page}
			style={{
				height: "100vh",
			}}>
			<Informations />
		</Grid>
	)
}

export default Home
