app.directive('productsDisplay', function () {
	return {
		restrict: "E",
		scope: false,
		templateUrl: 'app/views/ProductDisplay.html',
		link: function ($scope, element, attrs, toaster) {

		}
	};
});