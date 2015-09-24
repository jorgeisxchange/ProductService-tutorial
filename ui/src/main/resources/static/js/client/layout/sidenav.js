(function() {
	'use strict';
	
	angular
		.module('app.layout')
		.controller('Sidenav', Sidenav);
	
	Sidenav.$inject = ['$http', '$rootScope', '$route', '$mdSidenav', '$location', 'routehelper', 'logger'];
	
	function Sidenav($http, $rootScope, $route, $mdSidenav, $location, routehelper, logger) {
		
		var vModel = this;
		var routes = routehelper.getRoutes();
		
		vModel.toggleSidenav = function(menuId) {
		    $mdSidenav(menuId).toggle();
		  };
		
		  $http.get('user/').success(function(data) {
				if(data.name) {
					logger.info('Getting user info successful');
					$rootScope.authenticated = true;
				} else {
					logger.info('Getting user info failed');
					$rootScope.authenticated = false;
				}
			}).error(function() {
					logger.info('Getting user info failed');
					$rootScope.authenticated = false;
			});
		  
		vModel.go = go;
		vModel.toshow = toshow;
		
		init();
		
		function init() {
			getSidenavRoutes();
		}
		
		function getSidenavRoutes() {
			
			vModel.sidenavRoutes = routes.filter(function(r) {
				return r.settings && r.settings.nav;
			}).sort(function(r1, r2) {
				return r1.settings.nav - r2.settings.nav;
			});
		}
		
		function go(path) {
			$location.path(path);
		}
		
		function toshow(isauth) {
			logger.info('root auth' + $rootScope.authenticated);
			logger.info('isauth: ' + isauth);
			if(isauth) {
				return $rootScope.authenticated;
			} else {
				return true;
			}
		}
	}
	
})();