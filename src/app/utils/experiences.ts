export type Experience = {
	title: string
	link?: string
	period: string
	description: string
	technologies: string[]
}

export const experiences: Experience[] = [
  {
    title: "Fullstack Developer - Doctrine",
    link: "https://www.doctrine.fr",
    period: "Jan. 2025 – Today",
    description: `
Built fullstack features using Next.js and NestJS.
Developed REST APIs and integrated AI services.
Designed and implemented internal business chatbots.
Partially refactored the Design System with RGAA accessibility fixes.
Integrated Cypress tests into CI pipelines with GitHub Actions.
Set up monitoring dashboards using Datadog and Metabase, deployed on AWS with Docker.
    `.trim(),
    technologies: [
      "TypeScript",
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Cypress"
    ]
  },
  {
    title: "Fullstack Developer - Hupla",
    link: "https://www.hupla.fr", // assumed valid website
    period: "Aug. 2022 – Nov. 2024",
    description: `
Web development with React, Express.js, and TypeScript.
Redesigned the entire authentication system (security, sessions, Firebase SSO).
Migrated from serverless architecture to a self-hosted Express server.
Backend optimization: reduced API response time by 40%.
Implemented automated testing and CI/CD pipelines (GitLab + GCP).
    `.trim(),
    technologies: [
      "React",
      "Express.js",
      "Firebase",
      "GCP",
      "GitLab CI/CD",
      "Docker"
    ]
  },
  {
    title: "Web Developer - BII",
    period: "Mar. 2021 – Jul. 2022",
    description: `
Built a desktop budget management application using React.js, Node.js, Electron, and SQLite.
Designed front-end and back-end architecture from scratch.
Deployed and maintained infrastructure (PCs, networks, software, security).
Continuously debugged and improved system performance.
    `.trim(),
    technologies: [
      "React",
      "Node.js",
      "Electron",
      "SQLite",
      "JavaScript"
    ]
  }
]
