import { visibilityFilter } from "../actions/index";

const filters = (state = [], action) => {
	switch (action.type) {
		// Add filter to filters array
		case visibilityFilter.add:
			// If already have the filter, then don't add it to the filters list
			if (state.findIndex((filter) => filter.text === action.text) > -1) {
				return state;
			}

			// Add filter to the list
			return [
				...state,
				{
					text: action.text,
				},
			];

		// Remove filter from filters array
		case visibilityFilter.remove:
			return state.filter((filter) => filter.text !== action.text);

		// Remove all filters in the list
		case visibilityFilter.removeAll:
			return [];

		// Do nothing on default
		default:
			return state;
	}
};

export default filters;
