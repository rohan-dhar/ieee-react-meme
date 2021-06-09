import React from "react";
import "./core-ui.css";

export const Button = ({
	className = "",
	red = false,
	green = false,
	small = false,
	...props
}) => {
	return (
		<button
			className={`core-button ${small ? "core-button-small" : ""}
			${red ? "core-button-red" : ""} ${
				green ? "core-button-green" : ""
			}${className}`}
			{...props}
		/>
	);
};

const Footer = () => {
	return (
		<footer className="core-footer">
			&copy; IEEE React Workshop 2021 | IEEE - IIIT-D
		</footer>
	);
};

export const Page = ({ className = "", children, ...props }) => {
	return (
		<main className={`core-page ${className}`} {...props}>
			<section className="core-page-content">{children}</section>{" "}
			<Footer />
		</main>
	);
};

export const Loader = ({ className = "", ...props }) => {
	return <div className={`core-loader ${className}`} {...props} />;
};
