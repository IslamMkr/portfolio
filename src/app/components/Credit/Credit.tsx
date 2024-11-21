import React from "react"

const Credit = () => {
	return (
		<p
			style={{
				fontWeight: 400,
				fontSize: "14px",
				lineHeight: "20px",
				color: "#94a3b8",
			}}>
			Coded in{" "}
			<a
				href="https://code.visualstudio.com/"
				target="_blank"
				style={{
					color: "#5eead4",
					cursor: "pointer",
					fontWeight: "bold",
				}}>
				Visual Studio Code
			</a>{" "}
			by yours truly. Built with{" "}
			<a
				href="https://nextjs.org/"
				target="_blank"
				style={{
					color: "#5eead4",
					cursor: "pointer",
					fontWeight: "bold",
				}}>
				Next.js
			</a>{" "}
			<br />
			with the help of{" "}
			<a
				href="https://www.typescriptlang.org/"
				target="_blank"
				style={{
					color: "#5eead4",
					cursor: "pointer",
					fontWeight: "bold",
				}}>
				Typescript
			</a>{" "}
			&{" "}
			<a
				href="https://mui.com/material-ui/"
				target="_blank"
				style={{
					color: "#5eead4",
					cursor: "pointer",
					fontWeight: "bold",
				}}>
				Material UI
			</a>{" "}
			, All text is set in the{" "}
			<a
				href="https://fonts.google.com/specimen/Inter"
				target="_blank"
				style={{
					color: "#5eead4",
					cursor: "pointer",
					fontWeight: "bold",
				}}>
				Inter
			</a>{" "}
			typeface.
		</p>
	)
}

export default Credit
