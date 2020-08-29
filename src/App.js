import React from "react";
import { connect } from "react-redux";
import { Card } from "./components/Card.component";
import FilterBar from "./components/FilterBar.component";
import data from "./data.json";
import "./styles/index.scss";

const App = ({ filters }) => {
	// Generate Job Cards to the Job List based on Filters
	const generateJobCards = () => {
		if (filters.length > 0) {
			return data
				.filter((d) => {
					for (let val of [d.role, d.level, ...d.languages]) {
						if (filters.findIndex((filter) => filter.text === val) >= 0) {
							return true;
						}
					}
					return false;
				})
				.map((d, index) => {
					return <Card {...d} key={index} />;
				});
		}

		// If Filters list is empty then show all jobs
		return data.map((d, index) => <Card {...d} key={index} />);
	};

	return (
		<div>
			<FilterBar />
			{generateJobCards()}
		</div>
	);
};

const mapStateToProps = (state) => ({
	filters: state.filters,
});

export default connect(mapStateToProps, null)(App);
