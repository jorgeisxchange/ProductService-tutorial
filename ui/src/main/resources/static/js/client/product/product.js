(function() {
	'use strict';
	
	angular
		.module('app.product')
		.controller('Product', Product);
	
	
	Product.$inject = ['dataservice', 'logger'];
	
	function Product(dataservice, logger) {
		
		var vModel = this;
		
		vModel.products = [];
		vModel.productCount = 0;
		vModel.title = 'Products';

		vModel.findallproducts = findallproducts;
		vModel.countallproducts = countallproducts;
		vModel.newproduct = newproduct;
		vModel.deleteproduct = deleteproduct;

		init();
		
			
		function init() {

			logger.info('Getting all products...');
			return findallproducts();
		}
		
		function findallproducts() {
			vModel.products = dataservice.findAllProducts();
		}
		
		function countallproducts() {
			vModel.productCount = dataservice.countAllProducts();
		}
		
		function newproduct(product) {
			dataservice.saveOneProduct(product);
		}
		
		function deleteproduct(product) {
			dataservice.deleteOneProduct(product);
		}
	}
})();