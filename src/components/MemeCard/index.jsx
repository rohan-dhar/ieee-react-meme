import React from "react";

import "./meme-card.css";

const MemeCard = ({
	url,
	title,
	ups,
	author,
	onMemeToggle,
	selected,
	postLink,
	id,
}) => {
	return (
		<section className="meme-card">
			<main className="meme-card-hero">
				<img src={url} alt={title} />
			</main>
			<main className="meme-card-content">
				<h3>{title}</h3>
				<footer className="meme-card-footer">
					<section>
						<b>{author}</b>
					</section>
				</footer>
				<footer className="meme-card-footer meme-card-footer-action">
					<section className="meme-card-footer-upvotes">
						<b>{ups}</b> 👍
					</section>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href={postLink}
					>
						See in reddit 👉
					</a>
				</footer>
				<button
					className={`meme-card-select-button ${
						selected ? "meme-card-select-button-selected" : ""
					}`}
					onClick={() => onMemeToggle(id)}
				>
					{selected ? "✅  Selected" : "Select"}
				</button>
			</main>
		</section>
	);
};

export default MemeCard;
