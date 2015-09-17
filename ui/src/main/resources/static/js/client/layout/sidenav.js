(function() {
	'use strict';
	
	angular
		.module('app.layout')
		.controller('Sidenav', Sidenav);
	
	Sidenav.$inject = ['$route', '$mdSidenav', '$location', 'routehelper'];
	
	function Sidenav($route, $mdSidenav, $location, routehelper) {
		
		var vModel = this;
		var routes = routehelper.getRoutes();
		
		vModel.toggleSidenav = function(menuId) {
		    $mdSidenav(menuId).toggle();
		  };
		  
		vModel.go = go;
		
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
	}
	
})();