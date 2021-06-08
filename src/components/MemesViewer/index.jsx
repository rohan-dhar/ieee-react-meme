import React from "react";
import { Button, Loader } from "../CoreUI";
import MemeCard from "../MemeCard";
import "./memes-viewer.css";

const MemesViewer = ({ memes, onSelect, onLoadMore, response }) => {
	return (
		<main className="memes-viewer">
			<header className="memes-viewer-header">
				<h3>{memes.length} memes</h3>
				{response.loading ? (
					<Loader />
				) : (
					<Button disabled={response.loading} onClick={onLoadMore}>
						Gimmie more
					</Button>
				)}
			</header>
			<main className="memes-viewer-content">
				{memes.map((meme) => (
					<MemeCard key={meme.url} {...meme} />
				))}
			</main>
		</main>
	);
};
export default MemesViewer;
