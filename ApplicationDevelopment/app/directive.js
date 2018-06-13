app.directive('productsDisplay', function () {
	return {
		restrict: "E",
		scope: false,
		templateUrl: 'app/ProductDisplay.html',
		link: function ($scope, element, attrs, toaster) {

		}
	};
});