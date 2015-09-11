var home = angular.module('home', ['ngMaterial']);

home
	.controller('homeController', function($scope,$http,$mdSidenav) {
		$scope.toggleSidenav = function(menuId) {
			    $mdSidenav(menuId).toggle();
			  };
		
		$scope.listproducts = function() {
			$http.get('/products/').success(function(data) {
				$scope.products = data;
				$scope.producterror = false;
				$scope.showproducts = true;
				
				console.log($scope.products);
			}).error(function() {
				$scope.producterror = true;
				$scope.showproducts = false;
			});
		}
		
		$scope.newproduct = {};
		$scope.newProdErrors = [];
		$scope.addProduct = function() {
			console.log('submitted');
			console.log($scope.newproduct);
			if($scope.newproduct) {
				if(!$scope.newproduct.name) {
					$scope.newProdErros.push({message : 'Product name is required.'});
				}
				if(!$scope.newproduct.inventoryId) {
					$scope.newProdErros.push({message : 'Inventory Id is required.'});
				}
				
				console.log($scope.newProdErrors.length);
				if($scope.newProdErrors.length == 0) {
					$http.post('/products/add/', $scope.newproduct).success(function(data) {
						alert('Product is successfully added.');
					}).error(function() {
						alert('Error encountered while saving product.')
					});
				}
				
			} else {
				$scope.newProdErrors.push({message : 'Please fill out the form.'});
			}
		}
	})
	.controller('listController', function($scope) {
		$scope.links = [
		                {name : "Home"}, 
		                {name : "Products"}, 
		                {name : "About"}, 
		                {name : "Help"},
		                ];
	});