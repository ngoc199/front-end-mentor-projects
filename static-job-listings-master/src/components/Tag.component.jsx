import React from "react";
import { connect } from "react-redux";
import { addFilter } from "../actions/index";

const Tag = ({ text, dispatch }) => {
	const handleClick = (e) => {
		e.preventDefault();
		dispatch(addFilter(e.target.innerHTML));
	};

	return (
		<a href="/" className="tag" onClick={handleClick}>
			{text}
		</a>
	);
};

export default connect()(Tag);
