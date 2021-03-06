import React, { useCallback, useEffect, useRef, useState } from "react";
import { FETCH_MEMES_URL } from "../../urls";
import AllMemesView from "../AllMemesView";
import SelectedMemesView from "../SelectedMemesView";

const getMemes = async () => {
	try {
		const response = await fetch(FETCH_MEMES_URL(25), {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		return { success: false, data: await response.json() };
	} catch (error) {
		return {
			success: false,
			error,
		};
	}
};

const Memes = () => {
	const [memes, setMemes] = useState([]);
	const mounted = useRef(true);

	const lastId = useRef(0);

	const [response, setResponse] = useState({
		loading: false,
		error: false,
	});

	const addMemes = useCallback(async () => {
		setResponse({ loading: true, error: false });
		const memeResponse = await getMemes();
		if (!mounted.current) return;
		if (memeResponse.success) {
			setResponse({ error: true, loading: false });
		} else {
			for (let i = 0; i < 1; i++) {
				setMemes((memes) => [
					...memes,
					...memeResponse.data.memes.map((meme, index) => ({
						...meme,
						id: lastId.current + index,
					})),
				]);

				lastId.current += memeResponse.data.memes.length;
			}
			setResponse({ error: false, loading: false });
		}
	}, []);

	useEffect(() => {
		mounted.current = true;
		addMemes();
		return () => (mounted.current = false);
	}, [addMemes]);

	const handleMemeToggle = (id) => {
		setMemes((memes) => {
			const index = memes.findIndex((meme) => meme.id === id);
			if (index === -1) {
				return memes;
			}
			return [
				...memes.slice(0, index),
				{ ...memes[index], selected: !memes[index].selected },
				...memes.slice(index + 1),
			];
		});
	};

	return (
		<>
			<SelectedMemesView
				memes={memes}
				response={response}
				onMemeToggle={handleMemeToggle}
			/>
			<AllMemesView
				memes={memes}
				response={response}
				onLoadMore={addMemes}
				onMemeToggle={handleMemeToggle}
			/>
		</>
	);
};

export default Memes;
