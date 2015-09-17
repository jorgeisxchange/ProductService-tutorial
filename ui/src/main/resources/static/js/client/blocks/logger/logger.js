(function() {
	'use strict';
	
	angular
		.module('blocks.logger')
		.factory('logger', logger);
	
	logger.$inject = ['$log'];
	
	function logger($log) {
		
		var service = {
			success	:	success,
			info	:	info,
			warning	:	warning,
			error	:	error
		};
		
		return service;
		
		function success(message, data, title) {
			$log.info('SUCCESS: ' + message, data);
		}
		function info(message, data, title) {
			$log.info('INFO: ' + message, data);
		}
		function warning(message, data, title) {
			$log.warn('WARNING: ' + message, data);
		}
		function error(message, data, title) {
			$log.error('ERROR: ' + message, data);
		}
	}
})();