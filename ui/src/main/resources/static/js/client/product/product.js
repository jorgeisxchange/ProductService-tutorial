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
		
		vModel.tosearch = '';
		
		vModel.findallproducts = findallproducts;
		vModel.countallproducts = countallproducts;
		vModel.addproduct = addproduct;
		vModel.deleteproduct = deleteproduct;
		vModel.findbyname = findbyname;

		init();
		
			
		function init() {

			logger.info('Getting all products...');
			return findallproducts();
		}
		
		function findbyname() {
			if(vModel.tosearch == null || vModel.tosearch == '') {
				vModel.products = dataservice.findAllProducts();
			} else {				
				vModel.products = dataservice.findByName(vModel.tosearch);
			}
		}
		
		function findallproducts() {
			vModel.products = dataservice.findAllProducts();
		}
		
		function countallproducts() {
			vModel.productCount = dataservice.countAllProducts();
		}
		
		function addproduct() {
			dataservice.saveOneProduct(vModel.newproduct);
		}
		
		function deleteproduct(product) {
			dataservice.deleteOneProduct(product);
		}
	}
})();