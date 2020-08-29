import React from "react";
import { connect } from "react-redux";
import { removeAllFilter, removeFilter } from "../actions";
import FilteredTag from "./FilteredTag.component";

const FilterBar = ({ filters, removeFilter, removeAllFilter }) => {
	if (filters.length > 0) {
		return (
			<div id="filter-bar">
				<div className="filtered-tags">
					{filters.map((filter, index) => (
						<FilteredTag
							key={index}
							text={filter.text}
							onClick={() => removeFilter(filter.text)}
						/>
					))}
				</div>
				<button onClick={() => removeAllFilter()}>Clear</button>
			</div>
		);
	} else return <></>;
};

const mapStateToProps = (state) => ({
	filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
	removeFilter: (text) => dispatch(removeFilter(text)),
	removeAllFilter: () => dispatch(removeAllFilter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
