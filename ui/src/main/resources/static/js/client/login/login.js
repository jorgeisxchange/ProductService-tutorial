(function() {
	'use strict';
	
	angular
		.module('app.login')
		.controller('Login', Login);
	
	Login.$inject = ['logger'];
	
	function Login(logger) {
		
		
		var vModel = this;
		
		vModel.title = 'Login';
		
		init();
		
		function init() {
			logger.info('Loading Login Page...');
		}
	}
	
})();