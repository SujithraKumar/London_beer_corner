app.filter('array', function () {
	return function (n) {
		var res = [];
		for (var i = 0; i < n; i++) {
			res.push(i);
		}
		return res;
	};
});

app.filter('startFrom', function () {
	return function (input, start) {
		if (!input || !input.length) { return; }
		start = +start; //parse to int
		return input.slice(start);
	}
});

