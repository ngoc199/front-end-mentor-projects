export const visibilityFilter = {
	add: "ADD",
	remove: "REMOVE",
	removeAll: "REMOVE_ALL",
};

export const addFilter = (text) => {
	return {
		type: visibilityFilter.add,
		text,
	};
};

export const removeFilter = (text) => {
	return {
		type: visibilityFilter.remove,
		text,
	};
};

export const removeAllFilter = () => {
	return {
		type: visibilityFilter.removeAll,
	};
};
