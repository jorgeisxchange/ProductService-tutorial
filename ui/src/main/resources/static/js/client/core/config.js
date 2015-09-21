(function() {
	'use strict';
	
	var core = 	angular.module('app.core');
	
	var config = {
			appErrorPrefix: '[Product-App Error] ',
			appTitle: 'Simple Shop Application',
			version: '1.0.0'
	}
	
	core.value('config', config);
	core.config(configure);
	
	configure.$inject = ['$httpProvider', '$locationProvider', '$logProvider', '$routeProvider', '$mdThemingProvider', 'routehelperConfigProvider', 'exceptionHandlerProvider'];
	
	
	function configure($httpProvider, $locationProvider, $logProvider, $routeProvider, $mdThemingProvider, routehelperConfigProvider, exceptionHandlerProvider) {
		
		if($logProvider.debugEnabled) {
			$logProvider.debugEnabled(true);
		}
		
		//$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
		
		//$locationProvider.html5Mode(true);
		//routehelperConfigProvider.config.$locationProvider = $locationProvider;
		routehelperConfigProvider.config.$routeProvider = $routeProvider;
		routehelperConfigProvider.config.docTitle = 'Product-App: ';
		var resolveAlways = {
				ready: function(dataservice) {
					return dataservice;
				}
		};

		resolveAlways.ready.$inject = ['dataservice'];
		
		routehelperConfigProvider.config.resolveAlways = resolveAlways;
		exceptionHandlerProvider.configure(config.appErrorPrefix);
		
		configureTheme();
		
		function configureTheme() {
			$mdThemingProvider.theme('default')
	           .primaryPalette('indigo')
	           .accentPalette('pink')
	           .warnPalette('red')
	           .backgroundPalette('grey')
		}
	}
	
})();