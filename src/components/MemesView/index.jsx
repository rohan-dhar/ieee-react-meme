import React from "react";
import { Button, Loader } from "../CoreUI";
import MemeCard from "../MemeCard";
import "./memes-view.css";

const MemesView = ({
	heading,
	buttonText,
	onButtonClick,
	loading = false,
	className = "",
	noWrap = false,
	memes,
	onMemeToggle,
	...props
}) => {
	return (
		<main
			className={`memes-view ${className} ${
				noWrap ? "memes-view-nowrap" : ""
			}`}
			{...props}
		>
			<header className="memes-view-header">
				<h3>{heading}</h3>
				{loading ? (
					<Loader />
				) : (
					<Button disabled={loading} onClick={onButtonClick}>
						{buttonText}
					</Button>
				)}
			</header>
			{Array.isArray(memes) && memes.length > 0 && (
				<main className="memes-view-content">
					{memes.map((meme) => (
						<MemeCard
							onMemeToggle={onMemeToggle}
							key={meme.id}
							{...meme}
						/>
					))}
				</main>
			)}
		</main>
	);
};
export default MemesView;
