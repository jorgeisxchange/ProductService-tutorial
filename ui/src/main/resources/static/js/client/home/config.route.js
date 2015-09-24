(function() {
	'use strict';
	
	angular
		.module('app.home')
		.run(appRun);
	
	appRun.$inject = ['routehelper'];
	
	function appRun(routehelper) {
		routehelper.configureRoutes(getRoutes());
	}
	
	function getRoutes() {
		return [
		        {
		        	url: '/',
		        	config: {
		        		templateUrl: 'js/client/home/home.html',
		        		controller: 'Home',
		        		controllerAs: 'vModel',
		        		title: 'Home',
		        		settings: {
		        			nav: 1,
		        			content: 'Home',
		        			title: 'Home',
		        			icon: 'home'
		        		},
		        		isauth: false
		        	}
		        }
		        ];
	}
	
})();