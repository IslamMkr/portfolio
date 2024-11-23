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
		title: "Automated Customer Review Moderation for E-commerce",
		year: 2024,
		description:
			"Delivered a solution to help e-commerce businesses manage customer reviews effectively. The system used automated moderation to detect and address inappropriate or irrelevant feedback, ensuring a high-quality user experience and protecting brand reputation. The integration allowed for scalable and consistent review handling processes.",
		technologies: [
			"Java",
			"Spring Boot",
			"Typescript",
			"Angular",
			"Docker",
			"Kafka",
			"PostgreSQL",
			"Keycloak",
			"Gitlab CI/CD",
			"JUnit",
			"Mockito",
			"SonarQube",
		],
		image: "/projectone.png",
		link: "",
	},
	{
		title: "Document Management System with Advanced Classification",
		year: 2024,
		description:
			"Built a web-based system for businesses to manage and organize documents in various formats. The application included powerful features to classify and categorize content automatically, helping users store, retrieve, and process their files more effectively while reducing manual effort.",
		technologies: [".NET", "C#", "React", "Typescript", "Docker", "PostgreSQL"],
		image: "/projectone.png",
		link: "https://github.com/IslamMkr/document-storage",
	},
	{
		title: "Artist-Focused Social Networking Platform",
		year: 2023,
		description:
			"Created a dedicated social platform for artists to share and showcase their work. The platform supported continuous content scrolling, fostering user engagement, and included features for creating posts, interacting through comments, and building a community around creative content.",
		technologies: [
			"Java",
			"Spring Boot",
			"Typescript",
			"Node.js",
			"React",
			"React Query",
			"Material-UI",
			"Docker",
			"PostgreSQL",
		],
		link: "https://github.com/IslamMkr/instalite/tree/dev",
		image: "/projectone.png",
	},
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
