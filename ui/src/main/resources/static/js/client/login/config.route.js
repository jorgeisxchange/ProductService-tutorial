(function() {
	'use strict';
	
	angular
		.module('app.login')
		.run(appRun);
	
	appRun.$inject = ['routehelper'];
	
	function appRun(routehelper) {
		routehelper.configureRoutes(getRoutes());
	}
	
	function getRoutes() {
		return [
		        {
		        	url: '/login',
		        	config: {
		        		templateUrl: 'js/client/login/login.html',
		        		controller: 'Login',
		        		controllerAs: 'vModel',
		        		title: 'Login',
		        		settings: {
		        			nav: 3,
		        			content: 'Login',
		        			title: 'Login',
		        			icon: 'login'
		        		}
		        	}
		        }
		        ];		
	}
	
})();