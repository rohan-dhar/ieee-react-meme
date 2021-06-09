import React from "react";
import MemesView from "../MemesView";

const AllMemesView = ({ memes, response, onLoadMore, ...props }) => {
	return (
		<MemesView
			heading={`${memes.length} memes`}
			buttonText="Gimmie more"
			loading={response.loading}
			onButtonClick={onLoadMore}
			memes={memes}
			{...props}
		/>
	);
};
export default AllMemesView;
