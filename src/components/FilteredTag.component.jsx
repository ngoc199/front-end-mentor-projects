import React from "react";

function FilteredTag({ text, onClick }) {
	return (
		<div className="filtered-tag">
			{text}
			<div className="close" onClick={onClick}>
				&#10006;
			</div>
		</div>
	);
}

export default FilteredTag;
