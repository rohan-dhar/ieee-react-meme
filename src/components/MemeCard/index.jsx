import React from "react";
import { Button } from "../CoreUI";
import "./meme-card.css";

const MemeCard = ({
	url,
	title,
	added,
	onSelect,
	ups,
	author,
	onMemeToggle,
	selected,
	postUrl,
	...props
}) => {
	return (
		<section className="meme-card" {...props}>
			<img src={url} alt={title} />
			<main className="meme-card-content">
				<h3>{title}</h3>
				<footer className="meme-card-footer">
					<section>
						<b>{author}</b>
					</section>
					<section className="meme-card-footer-upvotes">
						<b>{ups}</b> upvotes
					</section>
				</footer>
				<footer className="meme-card-footer meme-card-footer-action">
					<Button
						small
						green={!selected}
						red={selected}
						onClick={() => onMemeToggle(url)}
					>
						{" "}
						{selected ? "Unselect" : "Select"}{" "}
					</Button>
					<a href={postUrl}>See in reddit</a>
				</footer>
			</main>
		</section>
	);
};

export default MemeCard;
