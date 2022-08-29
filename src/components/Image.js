import { useEffect, useRef, useState } from "react";
import "./Image.css";
import Likes from "./Likes";

export default function Image({ image }) {
	const ref = useRef();
	const [gridRow, setGridRow] = useState(0);
    const [likes, setLikes] = useState(false)

	const handleImageLoad = (event) => {
		// Do whatever you want here
		const imageHeight = event.target.clientHeight;
		const spans = Math.ceil(imageHeight / 10 + 1);
		setGridRow(spans);
        setLikes(true)
	};

	return (
		<div style={{ gridRowEnd: `span ${gridRow}` }}>
			<img
				onLoad={handleImageLoad}
				ref={ref}
				className="image"
                alt={image.alt_description}
				src={image.links.download}
			/>
            {likes && <Likes likes={image.likes}/>}
		</div>
	);
}
