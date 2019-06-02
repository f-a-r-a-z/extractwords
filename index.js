const defaults = {
	lowercase: false
};

module.exports = (str, options) => {
	options = {
		...defaults,
		...options
	};

	let words = str.match(/[a-zA-Z]+('[a-zA-Z]+)?/g) || [];

	if (options.lowercase) {
		words = words.map(str => str.toLowerCase());
	}

	return words;
};
