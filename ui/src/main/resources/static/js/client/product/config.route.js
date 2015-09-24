(function() {
	'use strict';
	
	angular
		.module('app.product')
		.run(appRun);
	
	appRun.$inject = ['routehelper'];
	
	function appRun(routehelper) {
		routehelper.configureRoutes(getRoutes());
	}
	
	function getRoutes() {
		return [
		        {
		        	url: '/products',
		        	config: {
		        		templateUrl: 'js/client/product/productList.html',
		        		controller: 'Product',
		        		controllerAs: 'vModel',
		        		title: 'Products',
		        		settings: {
		        			nav: 2,
		        			content: 'Products',
		        			title: 'Products',
		        			icon: 'store'
		        		},
		        		isauth: false
		        	}
		        },
		        {
		        	url: '/newproduct',
		        	config: {
		        		templateUrl: 'js/client/product/productCreate.html',
		        		controller: 'Product',
		        		controllerAs: 'vModel',
		        		title: 'New Product',
		        		settings: {
		        			nav: 3,
		        			content: 'New Product',
		        			title: 'New Product',
		        			icon: 'add_circle'
		        		},
		        		isauth: true
		        	}
		        }
		        
		        ];
	}
})();