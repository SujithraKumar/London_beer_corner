angular
	.module('MainApp')
	.controller('MainController', ['$scope', '$rootScope', 'MainService', MainController]);

function MainController($scope, $rootScope, MainService) {

	// ****variable declaration*****


	$scope.ProductsList = [];

	$scope.displayProductList = [];

	$scope.PriceList = ['0-10', '10-50', '50-100'];
	$scope.Ratings = [1, 2, 3, 4, 5];
	$scope.productName = '';

	$scope.currentPage = 0;
	$scope.pageSize = 18;
	$scope.showPaginator = false;

	$scope.getProductList = function () {
		MainService.getProducts().then(function (result) {
			$scope.showPaginator = true;
			if (result.status == 200) {
				if (result.data.length > 0) {
					$scope.ProductsList = result.data;
				}
			}
			
		}, function (error) {


		});
	}

	

	$scope.SelectedRating = '';

	$scope.FilterRating = function (rating) {

		$scope.SelectedRating = rating;

	}

	$scope.SelectedFeed = {};
	$scope.ShowModal = false;
	$scope.DetailView = function (feed) {

		$scope.ShowModal = true;
		$scope.SelectedFeed = feed;
		$('#ViewProduct').modal('show');

	}


	$scope.closeModal = function () {
		$scope.ShowModal = false;
		$('#ViewProduct').modal('hide');

	}
	//paginator 

	// paginator:

	$scope.numberOfPages = function () {
		return Math.ceil($scope.ProductsList.length / $scope.pageSize);
	}

	$scope.getProductList();
};