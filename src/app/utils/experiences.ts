export type Experience = {
	title: string
	link?: string
	period: string
	description: string
	technologies: string[]
}

export const experiences: Experience[] = [
	{
		title: "Fullstack Developper · Hupla",
		link: "https://app.hupla.fr/",
		period: "FEBRUARY 2023 — SEPTEMBER 2024",
		description:
			"Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
		technologies: [
			"Node.js",
			"Express",
			"React",
			"TypeScript",
			"Jest",
			"Cypress",
			"Firebase",
			"Google Cloud Platform",
			"Microsoft Azure",
		],
	},
]
