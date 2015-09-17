angular.module('uiApp', ['ui.router', 'ngResource', 'ngAnimate', 'ngMaterial', 'ngMdIcons', 'services', 'home', 'product'])
	.config(
			function($stateProvider, $urlRouterProvider, $locationProvider) {
				

				//$locationProvider.html5Mode(true);
				
				$urlRouterProvider.otherwise('/');
				
				$stateProvider
					.state('home', {
						url: '/',
						templateUrl: 'js/home/home.html',
						controller: 'homeCtrl'
					})
					.state('products', {
						url: '/products',
						templateUrl: 'js/product/productHome.html',
						controller: 'productCtrl'
					})
					.state('newproduct', {
						url: '/newproduct',
						templateUrl: 'js/product/productCreate.html',
						controller: 'productCtrl'
					})
					.state('logout', {
						url: '/',
						templateUrl: 'js/home/home.html',
						controller: 'homeCtrl'
					});
			
			})
	.controller('mainCtrl', function($scope, $location, $mdSidenav, $state) {
		$scope.pagetitle = 'Home';	    
		
		$scope.toggleSidenav = function(menuId) {
		    $mdSidenav(menuId).toggle();
		  };
		
		$scope.go = function (uisref, page) {
			$scope.pagetitle = page;			  
			//$location.path(path);
			$mdSidenav('left').close();
			$state.go(uisref);
		};
		
		$scope.menu = [
		                 {
		                   link : '/',
		                   title: 'Home',
		                   icon: 'home', 
		                   uisref: 'home'
		                 },
		                 {
		                   link : '/products',
		                   title: 'Products',
		                   icon: 'store', 
		                   uisref: 'products'
		                 },
		                 {
		                	link : '/newproduct',
		                	title : 'New Product',
		                	icon : 'add_circle', 
			                uisref: 'newproduct'
		                 },
		                 {
		                   link : '',
		                   title: 'Logout',
		                   icon: 'logout',
		                   uisref: 'logout'
		                 }
		               ];
	});