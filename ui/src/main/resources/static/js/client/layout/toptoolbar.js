(function() {
	'use strict';
	
	angular
		.module('app.layout')
		.controller('TopToolbar', TopToolbar);
	
	TopToolbar.$inject = ['$rootScope', '$http', '$route', '$mdSidenav', 'config', 'routehelper', 'logger'];
	
	function TopToolbar($rootScope, $http, $route, $mdSidenav, config, routehelper, logger) {
		
		var vModel = this;
		vModel.title = config.appTitle;
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

	}
})();