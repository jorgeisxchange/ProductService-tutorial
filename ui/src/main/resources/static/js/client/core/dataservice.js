(function() {
	'use strict';
	
	angular
		.module('app.core')
		.factory('dataservice', dataservice);
	
	dataservice.$inject = ['$resource', '$location', '$q', 'exception', 'logger'];
	
	function dataservice($resource, $location, $q, exception, logger) {
        var isPrimed = false;
        var primePromise;
		var data = $resource('/products/:product', {product: '@product'}, {
			update: {
				method: 'PUT'
			}
		});
		
		var data2 = $resource('/products/search/:name', {name: '@name'}, {
			search: {
				method: 'GET',
				isArray : true,
				params: {
					action: "search",
					name : '@name'
				}
			}
		});
		
		var service = {
				findAllProducts : findAllProducts,
				findOneProduct : findOneProduct,
				countAllProducts: countAllProducts,
				saveOneProduct : saveOneProduct,
				deleteOneProduct: deleteOneProduct,
				findByName : findByName,
				ready: ready
		}
		
		return service;
		
		
/*		function findByName(name) {
			return data2
						.query(name,
								function(data) {
									return data;
								},
								function(message){
									exception.catcher('FindByName Failed.')(message);
									$location.url('/');
								});
		}*/
		
		function findByName(iname) {
			return data2
						.search({name:iname}, function(data) {
							return data;
						},
								function(message){
									exception.catcher('FindByName Failed.')(message);
									$location.url('/');
								});
		}
		
		function findAllProducts() {
			
			return data
						.query(
								function(data) {
									return data;
								}, 
								function(message) {
							exception.catcher('FindAllProducts Failed.')(message);
							$location.url('/');
						});

		}
		
		function findOneProduct(product) {
			
			return data
						.query(product,
								function(data) {
									return data;
								},
								function(message) {
									exception.catcher('FindOneProduct Failed')(message);
									$location.url('/');
								}
						);

		}
				
		function countAllProducts() {
			var count = 0;
			return data
						.query(
								function(data) {
									count = data.length;
									return $q.when(count);
								},
								function(message) {
									exception.catcher('CountAllProducts Failed.')(message);
									$location.url('/');
								}
						);
		}
		
		function saveOneProduct(product) {
			
			return data
				.save(product,
						function(data) {
							return data;
						},
						function(message) {
							exception.catcher('SaveOneProduct Failed.')(message);
							$location.url('/');
						}
				);

		}
		
		function deleteOneProduct(product) {
			
			return data
				.delete(product,
						function(data) {
							return data;
						}, 
						function(message) {
							exception.catcher('DeleteOneProduct Failed.')(message);
							$location.url('/');
						}
					);
		}
		
	}
	
	function prime() {
		if(primePromise) {
			return primePromise;
		}
		
		primePromise = $q.when(true).then(success);
		
		return primePromise;
		
		function success() {
			isPrimed = true;
			logger.info('Primed data');
		}
	}
	
	function ready(nextPromises) {
		var readyPromise = primePromise || prime();
		
		return readyPromise
			.then(function() {return $q.all(nextPromises); })
			.catch(exception.catcher('"ready" Function Failed.'));
	}
	
})();