(function() {
	'use strict';
	
	angular
		.module('app.home')
		.controller('Home', Home);
	
	Home.$inject = ['dataservice', 'logger'];
	
	function Home(dataservice, logger) {
		
		var vModel = this;
		
		vModel.title = 'Home';
		
		init();
		
		function init() {
			logger.info('Loading Home Page...');
		}
		
	}
	
	
})();