import React, { useState } from "react";
import MemesView from "../MemesView";
import "./selected-memes-view.css";

const SelectedMemesView = ({ memes, ...props }) => {
	const [open, setOpen] = useState(false);
	const toggleShow = () => setOpen((open) => !open);

	const selectedMemes = memes.filter((meme) => meme.selected);

	return (
		<MemesView
			heading={`${selectedMemes.length} memes selected`}
			buttonText={open ? "Hide" : "Show"}
			onButtonClick={toggleShow}
			className="selected-memes-view"
			memes={open ? selectedMemes : []}
			noWrap
			{...props}
		/>
	);
};

export default SelectedMemesView;
