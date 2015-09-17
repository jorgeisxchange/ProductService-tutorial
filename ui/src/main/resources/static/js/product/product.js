angular.module('product', ['ui.router', 'ngAnimate', 'services'])
	.config(function($stateProvider,$locationProvider,$urlRouterProvider) {
		
		//$locationProvider.html5Mode(true);
		
		
		$stateProvider
			.state('products.list', {
				url: '/', 
				templateUrl: 'js/product/productList.html',
				controller: 'productCtrl'
			})
			.state('products.view', {
				url: '/view?productId',
				templateUrl: 'js/product/productView.html',
				controller: function($scope, $stateParams) {
					$scope.productid = $stateParams;
					$scope.isView=false;
				}
			});
	})
	.controller('productCtrl', function($rootScope, $scope, $http, $state, ProductService) {
		$scope.isView=true;
		
/*		$scope.loading = true;
		$http.get('/products/').success(function(data) {
			$scope.products = data;
			$scope.producterror = false;
			$scope.showproducts = true;
			
			$scope.loading = false;
			console.log($scope.products);
		}).error(function() {
			$scope.producterror = true;
			$scope.showproducts = false;
			$scope.loading = false;
		});*/
		
		$scope.loading = true;
		$scope.producterror = false;
		$scope.products = ProductService.query(
				function(data) {
					$scope.loading = false;
					$scope.producterror = false;
					$scope.showproducts = true;
				}, 
				function(error) {
					$scope.loading = false;
					$scope.producterror = true;
					$scope.showproducts = false;
				});
		
		

		$scope.view = function(viewproduct) {
			console.log('View Product');
			$scope.viewproduct = viewproduct;
			$scope.pagetitle = 'View Product';
			$state.go('products.view');
		}
		
		$scope.newproduct = {};
		$scope.newProdErrors = [];
		$scope.addProduct = function() {
			if($scope.newproduct) {
				if(!$scope.newproduct.name) {
					$scope.newProdErros.push({message : 'Product name is required.'});
				}
				if(!$scope.newproduct.inventoryId) {
					$scope.newProdErros.push({message : 'Inventory Id is required.'});
				}
				
				console.log($scope.newProdErrors.length);
				if($scope.newProdErrors.length == 0) {
					ProductService.save($scope.newProduct, 
							function(data) {
								alert('Product is successfully added.');
							}, 
							function(error) {
								alert('Error encountered while saving product.')
							}
					);
				}
				
			} else {
				$scope.newProdErrors.push({message : 'Please fill out the form.'});
			}
			
			/*console.log('submitted');
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
			}*/
		}
		
		$scope.deleteProduct = function() {
			ProductService.delete($scope.prodToDelete, 
					function(data) {
						alert('Product deleted.')
					}, 
					function(error) {
						alert('Problem encountered while deleting the product.')
					}
			);
		}
	});