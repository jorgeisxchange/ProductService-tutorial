(function() {
	'use strict';
	
	angular
		.module('app.layout')
		.controller('Base', Base);
	
	Base.$inject = ['$timeout', 'config', 'logger'];
	
	function Base($timeout, config, logger) {
		
		var vModel = this;
		
		vModel.title = config.appTitle;
		
		
		init();
		
		function init() {
			logger.success(config.appTitle + ' loaded!', null);
		}
	}
	
})();