export type Project = {
	title: string
	link?: string
	company?: string
	year: number
	description: string
	technologies: string[]
	image: string
}

export const projects: Project[] = [
	{
		title: "Delivery Application",
		year: 2023,
		description:
			"Built an app to manage deliveries, allowing users to set delivery rounds, assign drivers, and plan routes. It helps streamline delivery processes and improve efficiency.",
		technologies: [
			"React",
			"Typescript",
			"Node.js",
			"Express",
			"Prisma",
			"Docker",
			"PostgreSQL",
			"Keycloak",
			"Gitlab CI/CD",
			"Jest",
		],
		image: "/projectone.png",
		link: "https://gitlab.com/IslamMkr/delivery-app",
	},
	{
		title: "Kanban Project Management Website",
		year: 2023,
		description:
			"Created a Kanban-based website for managing tasks and users in an agile environment. The platform allows teams to organize tasks, track progress, and collaborate easily with features like customizable boards and user management.",
		technologies: ["React", "Typescript", "Material-UI", "Java", "Spring Boot", "MySQL", "JUnit", "Jest"],
		image: "/projectone.png",
		link: "https://github.com/IslamMkr/kanban_ui",
	},
	{
		title: "Sorting Algorithms Visualizer",
		year: 2021,
		description:
			"Developed a simple visualizer to demonstrate various sorting algorithms using Java and a minimalistic Swing UI. The project follows the MVC (Model-View-Controller) architecture.",
		technologies: ["Java", "Swing", "Visualization", "Sorting Algorithms"],
		image: "/projectone.png",
		link: "https://github.com/IslamMkr/Sorting-Algorithms-Visualizer",
	},
]
