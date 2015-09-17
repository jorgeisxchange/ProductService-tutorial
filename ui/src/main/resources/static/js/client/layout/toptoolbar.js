(function() {
	'use strict';
	
	angular
		.module('app.layout')
		.controller('TopToolbar', TopToolbar);
	
	TopToolbar.$inject = ['$route', '$mdSidenav', 'config', 'routehelper'];
	
	function TopToolbar($route, $mdSidenav, config, routehelper) {
		
		var vModel = this;
		vModel.title = config.appTitle;
		vModel.toggleSidenav = function(menuId) {
		    $mdSidenav(menuId).toggle();
		  };
		
		
	}
})();