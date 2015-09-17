(function() {
	'use strict';
	
	angular
		.module('blocks.router')
		.provider('routehelperConfig', routehelperConfig)
		.factory('routehelper', routehelper);
	
	routehelper.$inject = ['$location', '$rootScope', '$route', 'logger', 'routehelperConfig'];
	
	function routehelperConfig() {
		
		this.config = {
			//$routeProvider: undefined,
			//docTitle: 'Home',
			//resolveAlways: {ready: function(){}}
		};
		
		this.$get = function() {
			return {
				config : this.config
			};
		};
	}
	
	function routehelper($location, $rootScope, $route, logger, routehelperConfig) {
		
		var handlingRouteChangeError = false;
		var routeCounts = {
				error: 0,
				changes: 0
		};
		var routes = [];
		var $routeProvider = routehelperConfig.config.$routeProvider;
		
		var service = {
				configureRoutes : configureRoutes,
				getRoutes : getRoutes,
				routeCounts : routeCounts
		};
		
		init();
		
		return service;
		
		function configureRoutes(routes) {
			
			logger.info('Configuring routes...');
			routes.forEach(function(route) {
				route.config.resolve = 
					angular.extend(route.config.resolve || {}, routehelperConfig.config.resolveAlways);
				$routeProvider.when(route.url, route.config);
			});
			
			$routeProvider.otherwise({redirectTo: '/'});
		}
		
		function handleRoutingErrors() {
			
			$rootScope.$on('$routeChangeError',
					function(event, current, previous, rejection) {
					
					if(handlingRouteChangeError) {
						return;
					}
					
					routeCounts.error++;
					handlingRouteChangeError = true;
					
					var destination = (current && (current.title || current.name || current.loadedTemplateUrl)) ||'unknown target';
					var msg = 'Error routing to ' + destination + '. ' + (rejection.msg || '');
					logger.warning(msg, [current]);
					$location.path('/');
					
			});
		}
		
		function init() {
			handleRoutingErrors();
			updateDocTitle();
		}
		
		function getRoutes() {
			
			logger.info('Getting routes...');
			
			for(var prop in $route.routes) {
				if($route.routes.hasOwnProperty(prop)) {
					var route = $route.routes[prop];
					var isRoute = !!route.title;
					
					if(isRoute) {
						routes.push(route);
					}
				}
			}
			
			return routes;
		}
		
		function updateDocTitle() {
			$rootScope.$on('$routeChangeSuccess', 
					function(event, current, previous) {
					
					routeCounts.changes++;
					handlingRouteChangeError = false;
					var title = routehelperConfig.config.docTitle + ' ' + (current.title || '');
					$rootScope.title = title;
					$rootScope.toolbarTitle = current.title;
	
					logger.info('**Route Change Success**\n'+ 'Title: ' + current.title + '\n' + 'Route Count Changes: ' + routeCounts.changes);
					
					
			});
		}
	}
	
})();