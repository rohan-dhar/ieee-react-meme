import React from "react";
import "./meme-card.css";

const MemeCard = ({ url, title, added, onSelect, ups, author, ...props }) => {
	return (
		<section className="meme-card">
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
			</main>
		</section>
	);
};

export default MemeCard;
